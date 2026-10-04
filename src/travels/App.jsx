import React, { useEffect, useMemo, useState } from "react";
import MapComponent from "./components/MapComponent";
import PhotoPanel from "./components/PhotoPanel";
import Timeline from "./components/Timeline";
import { groupIntoTrips, loadPhotos, sliceByMonth } from "./photos";

// The timeline spans whole years, from January of the first photo to December of the last
const yearBounds = (photos) => [
  Math.floor(photos[0].month / 12) * 12,
  Math.floor(photos[photos.length - 1].month / 12) * 12 + 11,
];

const Explorer = ({ photos }) => {
  const bounds = useMemo(() => yearBounds(photos), [photos]);
  const [range, setRange] = useState(bounds);
  // Clustering and trip grouping wait until the slider is released, not every drag step
  const [settledRange, setSettledRange] = useState(bounds);
  const [fitTarget, setFitTarget] = useState(photos);
  const [selectedId, setSelectedId] = useState(null);
  const [focus, setFocus] = useState(null);

  const visible = useMemo(
    () => sliceByMonth(photos, settledRange),
    [photos, settledRange],
  );
  const trips = useMemo(() => groupIntoTrips(visible), [visible]);
  const tripOf = useMemo(() => {
    const lookup = new Map();
    trips.forEach((trip) =>
      trip.photos.forEach((photo) => lookup.set(photo.id, trip)),
    );
    return lookup;
  }, [trips]);

  const selectedTrip = tripOf.get(selectedId) ?? null;
  const selected =
    selectedTrip?.photos.find((photo) => photo.id === selectedId) ?? null;
  const index = selected
    ? selectedTrip.offset + selectedTrip.photos.indexOf(selected)
    : -1;

  const settle = (next) => {
    setSettledRange(next);
    setFitTarget(sliceByMonth(photos, next));
  };

  const resetRange = () => {
    setRange(bounds);
    settle(bounds);
  };

  const selectTrip = (trip) => {
    setSelectedId(trip.photos[0].id);
    setFitTarget(trip.photos);
  };

  const step = (delta) => {
    const next = selected && visible[index + delta];
    if (!next) return;
    setSelectedId(next.id);
    setFocus(next);
  };

  const selectPhoto = (photo) => {
    setSelectedId(photo.id);
    setFocus(photo);
  };

  useEffect(() => {
    const onKeyDown = (event) => {
      if (
        event.target.closest?.(
          '[role="slider"], .leaflet-container, input, textarea',
        )
      )
        return;
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  });

  return (
    <main className="layout">
      <section
        className="map-area"
        aria-label="Map of where the photos were taken"
      >
        <MapComponent
          photos={visible}
          fitTo={fitTarget}
          selected={selected}
          route={selectedTrip?.photos}
          focus={focus}
          onSelect={setSelectedId}
        />
      </section>

      <Timeline
        photos={photos}
        bounds={bounds}
        range={range}
        tripCount={trips.length}
        onChange={setRange}
        onAfterChange={settle}
        onReset={resetRange}
      />

      <PhotoPanel
        trips={trips}
        selected={selected}
        selectedTrip={selectedTrip}
        hasPrevious={index > 0}
        hasNext={index >= 0 && index < visible.length - 1}
        onSelectTrip={selectTrip}
        onSelectPhoto={selectPhoto}
        onStep={step}
      />
    </main>
  );
};

const App = () => {
  const [data, setData] = useState({ status: "loading" });

  useEffect(() => {
    loadPhotos().then(
      (photos) => setData({ status: "ready", photos }),
      (error) => setData({ status: "error", error }),
    );
  }, []);

  return (
    <div className="app">
      <header className="site-header">
        <a className="brand" href="/">
          <span className="brand-name">Pim van den Berg</span>
          <span className="brand-tag">Perspectives</span>
        </a>
        <h1 className="page-title">Travels</h1>
      </header>

      {data.status === "ready" && data.photos.length > 0 ? (
        <Explorer photos={data.photos} />
      ) : (
        <p className="app-status" role="status">
          {data.status === "loading" && "Loading photos…"}
          {data.status === "error" &&
            "The travel map could not be loaded. Please try again later."}
          {data.status === "ready" && "No photos on the map yet."}
        </p>
      )}
    </div>
  );
};

export default App;
