import React, { useMemo } from "react";
import ReactSlider from "react-slider";
import {
  formatCount,
  formatMonth,
  formatMonthRange,
  monthIndexToDate,
} from "../photos";

const Timeline = ({
  photos,
  bounds,
  range,
  tripCount,
  onChange,
  onAfterChange,
  onReset,
}) => {
  const [min, max] = bounds;
  const [start, end] = range;
  const firstYear = Math.floor(min / 12);
  const years = Array.from(
    { length: (max + 1 - min) / 12 },
    (_, i) => firstYear + i,
  );
  const labelEvery = Math.ceil(years.length / 12);

  const perMonth = useMemo(() => {
    const counts = new Array(max - min + 1).fill(0);
    photos.forEach((photo) => counts[photo.month - min]++);
    return counts;
  }, [photos, min, max]);
  const peak = Math.max(1, ...perMonth);
  const photoCount = perMonth
    .slice(start - min, end - min + 1)
    .reduce((sum, count) => sum + count, 0);

  return (
    <section className="timeline" aria-labelledby="timeline-heading">
      <div className="timeline-head">
        <h2 id="timeline-heading" className="timeline-title">
          {formatMonthRange(monthIndexToDate(start), monthIndexToDate(end))}
        </h2>
        <p className="timeline-count">
          {formatCount(photoCount, "photo")}
          {tripCount > 0 && `, ${formatCount(tripCount, "trip")}`}
        </p>
        {(start !== min || end !== max) && (
          <button type="button" className="text-button" onClick={onReset}>
            Show all years
          </button>
        )}
      </div>

      <div className="timeline-scale">
        <div className="histogram" aria-hidden="true">
          {perMonth.map((count, i) => (
            <span
              key={i}
              className={
                min + i >= start && min + i <= end ? "bar in-range" : "bar"
              }
              style={{
                height: count
                  ? `${Math.max(8, Math.sqrt(count / peak) * 100)}%`
                  : 0,
              }}
            />
          ))}
        </div>
        <ReactSlider
          className="range-slider"
          thumbClassName="range-thumb"
          trackClassName="range-track"
          value={range}
          min={min}
          max={max}
          minDistance={0}
          pearling
          onChange={onChange}
          onAfterChange={onAfterChange}
          ariaLabel={["From month", "To month"]}
          ariaValuetext={(state) =>
            formatMonth(monthIndexToDate(state.valueNow))
          }
        />
        <ol
          className="timeline-years"
          style={{ "--years": years.length }}
          aria-hidden="true"
        >
          {years.map((year, i) => (
            <li key={year}>{i % labelEvery === 0 ? year : ""}</li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Timeline;
