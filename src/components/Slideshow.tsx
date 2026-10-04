import { useEffect, useRef, useState } from "react";
import { useLang } from "../i18n";
import { images } from "./image-data";

const Copy = {
  en: { carousel: "carousel", slide: "slide", label: "Photo impressions by Pim", of: "of", previous: "Previous photo", next: "Next photo" },
  nl: { carousel: "carrousel", slide: "dia", label: "Foto-impressies van Pim", of: "van", previous: "Vorige foto", next: "Volgende foto" },
};

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
  const lang = useLang();
  const copy = Copy[lang];
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
      aria-roledescription={copy.carousel}
      aria-label={copy.label}
    >
      <ul className="slideshow-track" ref={trackRef} tabIndex={0}>
        {images.map((image, i) => (
          <li
            key={image.src}
            className="slideshow-slide"
            aria-roledescription={copy.slide}
            aria-label={`${i + 1} ${copy.of} ${images.length}`}
          >
            <img
              src={image.src}
              alt={image.alt[lang]}
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
        aria-label={copy.previous}
      >
        <Chevron direction="left" />
      </button>
      <button
        type="button"
        className="slideshow-button slideshow-next"
        onClick={() => goTo(index + 1)}
        aria-label={copy.next}
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
