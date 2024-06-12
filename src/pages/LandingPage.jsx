import React from "react";
import LandpageHeader from "../components/LandpageHeader";
import Split from "../components/Split";
import Track from "../components/Track";
import Settle from "../components/Settle";
import Transform from "../components/Transform";
import Partners from "../components/Partners";
import Footer from "../components/Footer";


function LandingPage() {
  return (
    <div className=" bg-cool-white-100">
      <LandpageHeader />

      <main>
        <Split />
        <Track />
        <Settle />
        <Transform />
        <Partners />
      </main>

      <Footer />
    </div>
  );
}

export default LandingPage;
