import { useState } from "react";
import mumbai from "./../images/video/mumbai-crawford-market.jpg";
import standUp from "./../images/video/stand-up-inspiration.jpg";
import dubai from "./../images/video/fishmarket-dubai.jpg";
import shanghai from "./../images/video/old-shanghai-foodcourt.jpg";

type Video = { id: number; poster: string; title: string; text?: string };

const Videos: Video[] = [
  { id: 38902000, poster: mumbai, title: "Mumbai Crawford Market" },
  {
    id: 33585155,
    poster: standUp,
    title: "Stand Up Inspiration",
    text: "Stand-up inspiration talk about looking attentively. At the invitation of Martijn Aslander.",
  },
  {
    id: 22828240,
    poster: dubai,
    title: "Fish market early morning, Dubai",
    text: "The oldest business on earth. Passionate and trustful eyes from traders of the Middle East.",
  },
  {
    id: 20731140,
    poster: shanghai,
    title: "Old Shanghai food court",
    text: "A food court in its broadest sense.",
  },
];

// Vimeo only loads after a click; dnt=1 keeps its player cookie-free.
const VideoCard = ({ video }: { video: Video }) => {
  const [playing, setPlaying] = useState(false);

  return (
    <article className="video-card">
      <div className="video-frame">
        {playing ? (
          <iframe
            title={video.title}
            src={`https://player.vimeo.com/video/${video.id}?dnt=1&autoplay=1`}
            allow="autoplay; fullscreen; picture-in-picture"
          />
        ) : (
          <button
            type="button"
            className="video-poster"
            onClick={() => setPlaying(true)}
            aria-label={`Play video: ${video.title}`}
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
      <h3>{video.title}</h3>
      {video.text && <p>{video.text}</p>}
    </article>
  );
};

const VideoSection = () => {
  return (
    <section
      id="videos"
      className="section band-charcoal"
      aria-labelledby="videos-title"
    >
      <div className="container">
        <header className="section-header section-header-row">
          <h2 id="videos-title">Latest videos</h2>
          <a
            className="text-link"
            href="https://vimeo.com/user5585500"
            target="_blank"
            rel="noopener noreferrer"
          >
            Watch all videos on Vimeo
          </a>
        </header>
        <div className="video-grid">
          {Videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default VideoSection;
