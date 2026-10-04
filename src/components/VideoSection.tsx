import { useState } from "react";
import { useLang, type Lang } from "../i18n";
import mumbai from "./../images/video/mumbai-crawford-market.jpg";
import standUp from "./../images/video/stand-up-inspiration.jpg";
import dubai from "./../images/video/fishmarket-dubai.jpg";
import shanghai from "./../images/video/old-shanghai-foodcourt.jpg";

type Text = Record<Lang, string>;
type Video = { id: number; poster: string; title: Text; text?: Text };

const Videos: Video[] = [
  {
    id: 38902000,
    poster: mumbai,
    title: { en: "Mumbai Crawford Market", nl: "Crawford Market in Mumbai" },
  },
  {
    id: 33585155,
    poster: standUp,
    title: { en: "Stand Up Inspiration", nl: "Stand Up Inspiration" },
    text: {
      en: "Stand-up inspiration talk about looking attentively. At the invitation of Martijn Aslander.",
      nl: "Een inspiratiepraatje over aandachtig kijken, op uitnodiging van Martijn Aslander.",
    },
  },
  {
    id: 22828240,
    poster: dubai,
    title: {
      en: "Fish market early morning, Dubai",
      nl: "Vroeg op de vismarkt in Dubai",
    },
    text: {
      en: "The oldest business on earth. Passionate and trustful eyes from traders of the Middle East.",
      nl: "De oudste handel ter wereld. Gepassioneerde, vertrouwenwekkende blikken van handelaren uit het Midden-Oosten.",
    },
  },
  {
    id: 20731140,
    poster: shanghai,
    title: { en: "Old Shanghai food court", nl: "Oude foodcourt in Shanghai" },
    text: {
      en: "A food court in its broadest sense.",
      nl: "Een foodcourt in de breedste zin van het woord.",
    },
  },
];

const Copy = {
  en: { title: "Latest videos", all: "Watch all videos on Vimeo", play: "Play video" },
  nl: { title: "Recente video’s", all: "Alle video’s op Vimeo", play: "Speel video af" },
};

// Vimeo only loads after a click; dnt=1 keeps its player cookie-free.
const VideoCard = ({ video, lang }: { video: Video; lang: Lang }) => {
  const [playing, setPlaying] = useState(false);
  const title = video.title[lang];

  return (
    <article className="video-card">
      <div className="video-frame">
        {playing ? (
          <iframe
            title={title}
            src={`https://player.vimeo.com/video/${video.id}?dnt=1&autoplay=1`}
            allow="autoplay; fullscreen; picture-in-picture"
          />
        ) : (
          <button
            type="button"
            className="video-poster"
            onClick={() => setPlaying(true)}
            aria-label={`${Copy[lang].play}: ${title}`}
          >
            <img
              src={video.poster}
              alt=""
              width={640}
              height={360}
              loading="lazy"
            />
            <span className="video-play" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="28" height="28">
                <path d="M8 5.5v13l11-6.5z" fill="currentColor" />
              </svg>
            </span>
          </button>
        )}
      </div>
      <h3>{title}</h3>
      {video.text && <p>{video.text[lang]}</p>}
    </article>
  );
};

const VideoSection = () => {
  const lang = useLang();
  const copy = Copy[lang];

  return (
    <section
      id="videos"
      className="section band-charcoal"
      aria-labelledby="videos-title"
    >
      <div className="container">
        <header className="section-header section-header-row">
          <h2 id="videos-title">{copy.title}</h2>
          <a
            className="text-link"
            href="https://vimeo.com/user5585500"
            target="_blank"
            rel="noopener noreferrer"
          >
            {copy.all}
          </a>
        </header>
        <div className="video-grid">
          {Videos.map((video) => (
            <VideoCard key={video.id} video={video} lang={lang} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default VideoSection;
