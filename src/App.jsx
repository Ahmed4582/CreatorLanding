import React from "react";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import HeroSec from "./components/HeroSec/HeroSec.jsx";
import PartnersSec from "./components/PartnersSec/PartnersSec.jsx";
import WorkSec1 from "./components/WorkSec-1/WorkSec1.jsx";
import WorkSec2 from "./components/WorkSec-2/WorkSec2.jsx";
import WorkSec3 from "./components/WorkSec-3/WorkSec3.jsx";
import ReviewSec from "./components/ReviewSec/ReviewSec.jsx";
import Raliability from "./components/Raliability/Raliability.jsx";
import { Footer } from "./components/Footer/Footer.jsx";

const App = () => {
  return (
    <div className="App">
      <Header />
      <HeroSec />
      <PartnersSec />
      <WorkSec1 />
      <WorkSec2 />
      <WorkSec3 />
      <ReviewSec />
      <Raliability />
      <Footer />
    </div>
  );
};

export default App;
