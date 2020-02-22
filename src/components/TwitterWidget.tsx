import React from "react";

const TwitterWidget = (image: any) => {
  const Tweets = [
    {
      key: 1,
      text: "Mooie ontwikkeling.",
      link: "https://t.co/DmtWWwkVBa",
      datetime: "29-9-2018 15:39:40"
    },
    {
      key: 2,
      text:
        "Mooie The forgotten grandeur of Britain's department stores – a historian reflects .",
      link: "https://t.co/hjBWwBZrs2",
      datetime: ""
    },
    {
      key: 3,
      text:
        "Haarlemse Orgelweken. Talented students from many cities from our world being inspired by Leo van Doeselaar. Touching a note is all about knowing what you want. Enthusiasm and love for what you do. That creates music that even Bach would like. Great privilege to be part of it.",
      link: "https://t.co/dcYdDSIqh4",
      datetime: ""
    },
    {
      key: 4,
      text: "Tesco lanceert eigen discounter in strijd tegen Aldi en Lidl",
      link: "https://t.co/WQUiIVrwlH.",
      datetime: ""
    }
  ];

  return (
    <>
      <div className="twitter-widget-wrapper">
        <div className="twitter-widget-left-wrapper">
          <div className="twitter-widget-header">
            <h1>Tweet from Pim</h1>
          </div>
          <div className="twitter-widget-text" key={Tweets[0].key}>
            {Tweets[0].text} - <a href={Tweets[0].link}>{Tweets[0].link}</a>
          </div>
          <div className="twitter-widget-profile-wrapper">
            <div className="twitter-widget-profile-picture">Foto</div>
            <div className="twitter-widget-profile-name">Pim van den Berg</div>
            <div className="twitter-widget-profile-datetime">
              {Tweets[0].datetime}
            </div>
          </div>
        </div>
        <div className="twitter-widget-right-wrapper">
          <ul>
            {Tweets.map(tweet => {
              return (
                <li className="twitter-widget-tweet" key={tweet.key}>
                  {tweet.text} - <a href={tweet.link}>{tweet.link}</a>
                </li>
              );
            })}
            {/* <a href="bla"></a> */}
          </ul>
          <a
            id="twitter-widget-follow"
            className="twitter-widget-follow"
            href="http://www.twitter.com/pimvandenberg"
          >
            Follow Pim
          </a>
        </div>
      </div>
    </>
  );
};
export default TwitterWidget;
