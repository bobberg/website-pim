import React, { useEffect, useRef, useState } from "react";
import {
  formatCoords,
  formatCount,
  formatDay,
  formatDayRange,
  formatTime,
  mapsUrl,
  previewUrl,
} from "../photos";

const TRIPS_PER_PAGE = 100;
// Pictograms rendered around the selected photo; long trips would otherwise add thousands of images
const STRIP_WINDOW = 120;

const placementNotes = {
  1: "Approximate: this photo has no GPS, so it is placed where the other photos of the same series were taken.",
  2: "Approximate: this photo has no GPS, so it is placed by the name of its series.",
};

const Preview = ({ src, alt, className, fallback = "No preview" }) => {
  const [state, setState] = useState("loading");
  if (!src || state === "error") {
    return <span className={`${className} preview-missing`}>{fallback}</span>;
  }
  return (
    <img
      className={className}
      src={src}
      alt={alt}
      decoding="async"
      data-state={state}
      onLoad={() => setState("loaded")}
      onError={() => setState("error")}
    />
  );
};

const Pictograms = ({ photo, trip, onSelectPhoto }) => {
  const stripRef = useRef(null);
  const index = trip.photos.indexOf(photo);
  const start = Math.max(
    0,
    Math.min(index - STRIP_WINDOW / 2, trip.photos.length - STRIP_WINDOW),
  );
  const shown = trip.photos.slice(start, start + STRIP_WINDOW);

  // Scrolls only the strip itself, so the page or panel never jumps
  useEffect(() => {
    const strip = stripRef.current;
    const current = strip?.querySelector('[aria-current="true"]');
    if (current) {
      const stripBox = strip.getBoundingClientRect();
      const box = current.getBoundingClientRect();
      strip.scrollLeft +=
        box.left - stripBox.left - (stripBox.width - box.width) / 2;
    }
  }, [photo]);

  if (trip.photos.length < 2) return null;
  return (
    <ul className="pictograms" ref={stripRef} aria-label="Photos in this trip">
      {shown.map((item) => (
        <li key={item.id}>
          <button
            type="button"
            className="pictogram"
            aria-current={item === photo ? "true" : undefined}
            aria-label={`${item.place}, ${formatDay(item.date)} at ${formatTime(item.date)}`}
            onClick={() => onSelectPhoto(item)}
          >
            <Preview
              key={item.id}
              className="pictogram-image"
              src={previewUrl(item, 200)}
              alt=""
              fallback=""
            />
          </button>
        </li>
      ))}
    </ul>
  );
};

const Viewer = ({
  photo,
  trip,
  hasPrevious,
  hasNext,
  onStep,
  onSelectPhoto,
}) => (
  <div className="viewer">
    <div className="preview-frame">
      <Preview
        key={photo.id}
        className="preview-image"
        src={previewUrl(photo, 640)}
        alt={`Photo taken in ${photo.place} on ${formatDay(photo.date)}`}
      />
    </div>
    <Pictograms photo={photo} trip={trip} onSelectPhoto={onSelectPhoto} />

    <div aria-live="polite">
      <h2 className="viewer-title">{photo.place}</h2>
      <p className="viewer-date">
        {formatDay(photo.date)} at {formatTime(photo.date)}
      </p>
    </div>

    <dl className="viewer-details">
      <div>
        <dt>Location</dt>
        <dd>
          {formatCoords(photo)}{" "}
          <a href={mapsUrl(photo)} target="_blank" rel="noreferrer">
            Google Maps ↗
          </a>
          {placementNotes[photo.placed] && (
            <span className="placement-note">
              {placementNotes[photo.placed]}
            </span>
          )}
        </dd>
      </div>
    </dl>

    <div className="viewer-nav">
      <button
        type="button"
        className="pill-button"
        onClick={() => onStep(-1)}
        disabled={!hasPrevious}
      >
        Previous
      </button>
      <span className="viewer-position">
        {trip.photos.indexOf(photo) + 1} of{" "}
        {trip.photos.length.toLocaleString("en-GB")} in this trip
      </span>
      <button
        type="button"
        className="pill-button"
        onClick={() => onStep(1)}
        disabled={!hasNext}
      >
        Next
      </button>
    </div>
  </div>
);

const PhotoPanel = ({
  trips,
  selected,
  selectedTrip,
  hasPrevious,
  hasNext,
  onSelectTrip,
  onSelectPhoto,
  onStep,
}) => {
  const listRef = useRef(null);
  const [limit, setLimit] = useState(TRIPS_PER_PAGE);
  const shown = Math.max(limit, trips.indexOf(selectedTrip) + 1);
  const remaining = trips.length - shown;

  useEffect(() => setLimit(TRIPS_PER_PAGE), [trips]);

  // Only scroll the list when it is its own scroll area (wide screens), never the whole page
  useEffect(() => {
    const list = listRef.current;
    if (!list || list.scrollHeight <= list.clientHeight) return;
    list
      .querySelector('[aria-current="true"]')
      ?.scrollIntoView({ block: "nearest" });
  }, [selectedTrip]);

  return (
    <aside className="panel" aria-label="Photo details and trips">
      {selected ? (
        <Viewer
          photo={selected}
          trip={selectedTrip}
          hasPrevious={hasPrevious}
          hasNext={hasNext}
          onStep={onStep}
          onSelectPhoto={onSelectPhoto}
        />
      ) : (
        <p className="panel-intro">
          Choose a place on the map or a trip below to see where and when a
          photo was taken.
        </p>
      )}

      <div className="trips" ref={listRef}>
        <h2 className="trips-title">Trips</h2>
        {trips.length === 0 ? (
          <p className="panel-empty">
            No photos in this period. Drag the timeline handles apart to see
            more.
          </p>
        ) : (
          <ol className="trip-list">
            {trips.slice(0, shown).map((trip) => (
              <li key={trip.id}>
                <button
                  type="button"
                  className="trip-row"
                  aria-current={trip === selectedTrip ? "true" : undefined}
                  onClick={() => onSelectTrip(trip)}
                >
                  <span className="trip-title">{trip.title}</span>
                  <span className="trip-meta">
                    {formatDayRange(trip.start, trip.end)} ·{" "}
                    {formatCount(trip.photos.length, "photo")}
                  </span>
                </button>
              </li>
            ))}
          </ol>
        )}
        {remaining > 0 && (
          <button
            type="button"
            className="pill-button more-button"
            onClick={() => setLimit(shown + TRIPS_PER_PAGE)}
          >
            Show more ({formatCount(remaining, "trip")} left)
          </button>
        )}
      </div>
    </aside>
  );
};

export default PhotoPanel;
