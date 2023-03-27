import React from "react";
import BackToTop from "./Components/app-bar";
import LandingPage from "./Pages/landing-page";
import About from "./Pages/about";
import Work from "./Pages/work";
import Contact from "./Pages/contact";
import "./App.css";

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <BackToTop />
          <LandingPage />
          <About />
          <Work />
          <Contact />
        </div>
      </header>
    </div>
  );
}

export default App;
