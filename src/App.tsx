import React from "react";
import "./css";
import Introduction from "./components/Introduction";
import Slideshow from "./components/Slideshow";

import TwitterWidget from "./components/TwitterWidget";
import VideoSection from "./components/VideoSection";
import Assignments from "./components/Assignments";
import Manifesto from "./components/Manifesto";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      {/* <header className="App-header"></header> */}

      <h1 className="pimvandenberg">
        <i>Pim van den Berg</i>
      </h1>
      <h2>Perspectives</h2>

      <div className="slideshow-container">
        <Slideshow />
      </div>
      <Introduction />
      <TwitterWidget />
      <VideoSection />
      <Manifesto />
      <Assignments />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
