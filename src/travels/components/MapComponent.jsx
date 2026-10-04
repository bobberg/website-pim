import React, { useEffect, useMemo, useState } from "react";
import L from "leaflet";
import Supercluster from "supercluster";
import {
  CircleMarker,
  MapContainer,
  Marker,
  Pane,
  Polyline,
  TileLayer,
  Tooltip,
  useMap,
  useMapEvent,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { formatCount, formatDay } from "../photos";

const animate = !window.matchMedia?.("(prefers-reduced-motion: reduce)")
  .matches;
const fitOptions = { padding: [48, 48], maxZoom: 15, animate };
const clusterMaxZoom = 16;
// Above this, the selected trip is shown as a route only, to keep the map responsive
const maxTripDots = 1500;

const markerStyle = {
  color: "#1b1b1a",
  weight: 1,
  fillColor: "#ff6600",
  fillOpacity: 1,
};
const approximateStyle = {
  color: "#ff6600",
  weight: 2,
  fillColor: "#ffffff",
  fillOpacity: 1,
};
const selectedStyle = {
  color: "#ffffff",
  weight: 3,
  fillColor: "#1b1b1a",
  fillOpacity: 1,
};
const routeStyle = {
  color: "#a65200",
  weight: 2,
  opacity: 0.8,
  dashArray: "4 6",
};

const toLatLng = (photo) => [photo.lat, photo.lng];

const PhotoDot = ({ photo, onSelect }) => (
  <CircleMarker
    center={toLatLng(photo)}
    radius={6}
    pathOptions={photo.placed ? approximateStyle : markerStyle}
    eventHandlers={{ click: () => onSelect(photo.id) }}
  >
    <Tooltip direction="top" offset={[0, -6]}>
      {photo.place}, {formatDay(photo.date)}
      {photo.placed ? " (approximate)" : ""}
    </Tooltip>
  </CircleMarker>
);

const boundsOf = (photos) => {
  let south = 90;
  let north = -90;
  let west = 180;
  let east = -180;
  photos.forEach(({ lat, lng }) => {
    south = Math.min(south, lat);
    north = Math.max(north, lat);
    west = Math.min(west, lng);
    east = Math.max(east, lng);
  });
  return L.latLngBounds([south, west], [north, east]);
};

const clusterIcons = new Map();
const clusterIcon = (count, label) => {
  const size = count < 10 ? 30 : count < 100 ? 36 : count < 1000 ? 42 : 50;
  const key = `${size}:${label}`;
  if (!clusterIcons.has(key)) {
    clusterIcons.set(
      key,
      L.divIcon({
        html: `<span>${label}</span>`,
        className: "cluster",
        iconSize: [size, size],
      }),
    );
  }
  return clusterIcons.get(key);
};

const FitToPhotos = ({ photos }) => {
  const map = useMap();
  useEffect(() => {
    if (photos.length) map.fitBounds(boundsOf(photos), fitOptions);
  }, [map, photos]);
  return null;
};

const KeepInView = ({ photo }) => {
  const map = useMap();
  useEffect(() => {
    if (photo && !map.getBounds().contains(toLatLng(photo))) {
      map.panTo(toLatLng(photo), { animate });
    }
  }, [map, photo]);
  return null;
};

const viewOf = (map) => {
  const bounds = map.getBounds().pad(0.25);
  return {
    bbox: [
      bounds.getWest(),
      bounds.getSouth(),
      bounds.getEast(),
      bounds.getNorth(),
    ],
    zoom: Math.round(map.getZoom()),
  };
};

// Only the clusters and photos inside the current view are rendered, so the full archive stays fast
const ClusteredPhotos = ({ photos, selected, onSelect }) => {
  const map = useMap();
  const index = useMemo(() => {
    const clusters = new Supercluster({ radius: 48, maxZoom: clusterMaxZoom });
    return clusters.load(
      photos.map((photo) => ({
        type: "Feature",
        geometry: { type: "Point", coordinates: [photo.lng, photo.lat] },
        properties: { photo },
      })),
    );
  }, [photos]);
  const [view, setView] = useState(() => viewOf(map));
  useMapEvent("moveend", () => setView(viewOf(map)));
  const items = useMemo(
    () => index.getClusters(view.bbox, view.zoom),
    [index, view],
  );

  const expand = (cluster) => {
    const [lng, lat] = cluster.geometry.coordinates;
    const zoom = index.getClusterExpansionZoom(cluster.properties.cluster_id);
    map.setView([lat, lng], Math.min(zoom, map.getMaxZoom()), { animate });
  };

  return items.map((item) => {
    const [lng, lat] = item.geometry.coordinates;
    if (item.properties.cluster) {
      const { cluster_id, point_count, point_count_abbreviated } =
        item.properties;
      return (
        <Marker
          key={`cluster-${cluster_id}`}
          position={[lat, lng]}
          icon={clusterIcon(point_count, point_count_abbreviated)}
          title={`${formatCount(point_count, "photo")}, select to zoom in`}
          eventHandlers={{ click: () => expand(item) }}
        />
      );
    }
    const { photo } = item.properties;
    if (photo === selected) return null;
    return <PhotoDot key={photo.id} photo={photo} onSelect={onSelect} />;
  });
};

const MapComponent = ({ photos, fitTo, selected, route, focus, onSelect }) => {
  const initialView = fitTo.length
    ? { bounds: boundsOf(fitTo), boundsOptions: fitOptions }
    : { center: [52.37, 4.89], zoom: 6 };

  return (
    <MapContainer {...initialView} className="map" worldCopyJump>
      <TileLayer
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        maxZoom={19}
      />
      <FitToPhotos photos={fitTo} />
      <KeepInView photo={focus} />

      {route?.length > 1 && (
        <Polyline
          positions={route.map(toLatLng)}
          pathOptions={routeStyle}
          interactive={false}
        />
      )}

      <ClusteredPhotos
        photos={photos}
        selected={selected}
        onSelect={onSelect}
      />

      {/* Its own pane keeps the selected trip and photo above the cluster markers */}
      <Pane name="selected" style={{ zIndex: 650 }}>
        {route?.length <= maxTripDots &&
          route
            .filter((photo) => photo !== selected)
            .map((photo) => (
              <PhotoDot key={photo.id} photo={photo} onSelect={onSelect} />
            ))}
        {selected && (
          <CircleMarker
            key={selected.id}
            center={toLatLng(selected)}
            radius={10}
            pathOptions={selectedStyle}
            interactive={false}
          />
        )}
      </Pane>
    </MapContainer>
  );
};

export default MapComponent;
