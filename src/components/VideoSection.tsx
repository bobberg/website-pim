import React from "react";

const VideoSection = (image: any) => {
  const VimeoLinks = [
    {
      key: 1,
      imgsrc: "http://i.vimeocdn.com/video/268038873_640.jpg",
      src: "http://player.vimeo.com/video/38902000",
      title: "Mumbai Crawford Market",
      alt: ""
    },
    {
      key: 2,
      imgsrc: "http://i.vimeocdn.com/video/228068936_640.jpg",
      src: "http://player.vimeo.com/video/33585155",
      title: "Stand Up Inspiration",
      text:
        "Stand-up Inspiration Talk over aandachtig kijken. Op uitnodiging van Martijn Aslander.",
      alt: ""
    },
    {
      key: 3,
      imgsrc: "http://i.vimeocdn.com/video/147977975_640.jpg",
      src: "http://player.vimeo.com/video/22828240",
      title: "Fismarket early morning Dubai",
      text:
        "The oldest business on earth. Passionate and trustful eyes from traders of the Middle East.",
      alt: ""
    },
    {
      key: 4,
      imgsrc: "http://i.vimeocdn.com/video/132757816_640.jpg",
      src: "http://player.vimeo.com/video/20731140",
      title: "Old Shanghai Foodcourt in its broadest sense.",
      alt: ""
    }
  ];

  return (
    <>
      <div className="video-section">
        {VimeoLinks.map(video => {
          return (
            <div key={video.key}>
              <h1>{video.title}</h1>
              <img alt="" src={video.imgsrc} />
              <iframe
                title={video.title}
                src={video.src}
                width="460"
                height="258"
              ></iframe>
              {video.text ? video.text : ""}
            </div>
          );
        })}
      </div>
      <div>
        <a href="http://vimeo.com/user5585500">
          Watch all videos on <span className="vimeo">vimeo</span>
        </a>
      </div>
    </>
  );
};
export default VideoSection;
