import { useEffect, useRef, useState } from "react";
import { images } from "./image-data";

const Chevron = ({ direction }: { direction: "left" | "right" }) => (
  <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
    <path
      d={direction === "left" ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7"}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Native scroll-snap carousel: swipe/trackpad/keyboard work out of the box.
const Slideshow = () => {
  const trackRef = useRef<HTMLUListElement>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onScroll = () =>
      setIndex(Math.round(track.scrollLeft / track.clientWidth));
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (target: number) => {
    const track = trackRef.current;
    if (!track) return;
    const wrapped = (target + images.length) % images.length;
    track.scrollTo({ left: wrapped * track.clientWidth });
  };

  return (
    <section
      className="slideshow"
      aria-roledescription="carousel"
      aria-label="Photo impressions by Pim"
    >
      <ul className="slideshow-track" ref={trackRef} tabIndex={0}>
        {images.map((image, i) => (
          <li
            key={image.src}
            className="slideshow-slide"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${images.length}`}
          >
            <img
              src={image.src}
              alt={image.alt}
              width={940}
              height={625}
              loading={i === 0 ? "eager" : "lazy"}
              decoding={i === 0 ? "sync" : "async"}
              draggable={false}
            />
          </li>
        ))}
      </ul>
      <button
        type="button"
        className="slideshow-button slideshow-prev"
        onClick={() => goTo(index - 1)}
        aria-label="Previous photo"
      >
        <Chevron direction="left" />
      </button>
      <button
        type="button"
        className="slideshow-button slideshow-next"
        onClick={() => goTo(index + 1)}
        aria-label="Next photo"
      >
        <Chevron direction="right" />
      </button>
      <p className="slideshow-counter" aria-hidden="true">
        {String(index + 1).padStart(2, "0")}
        <span> / {String(images.length).padStart(2, "0")}</span>
      </p>
    </section>
  );
};
export default Slideshow;
