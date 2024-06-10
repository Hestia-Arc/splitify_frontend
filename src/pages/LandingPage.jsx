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
    <div className="">
      <div className="flex flex-col ">
        <LandpageHeader />
        <main className="flex-1">
          <Split />
          <Track />
          <Settle />
          <Transform />
          <Partners />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}

export default LandingPage;
