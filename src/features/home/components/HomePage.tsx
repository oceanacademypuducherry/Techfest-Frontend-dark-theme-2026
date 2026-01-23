import { useEffect } from "react";
import { FireworksDisplay } from "../utils/firework";
import { useLocation } from "react-router-dom";
import {
  Sponsors,
  PastEvent,
  EventAttend,
  ConferenceHighlights,
  HomeMain,
} from "./";
import { Navbar, Navigation, Footer } from "../../../common/ui";
import About from "./About";
import Speakers from "../../speakers/components/Speakers";
import SpeakersSection from "./SpeakersSection";

export default function Homepage() {
  // useEffect(() => {
  //   // Initialize FireworksDisplay after the component mounts
  //   new FireworksDisplay();
  //   sessionStorage.removeItem("paymentHistoryId");
  // }, []); // Empty dependency array ensures this runs only once

  const location = useLocation();

  useEffect(() => {
    // If the state contains scrollToPastEvents, scroll to the section
    if (location.state?.scrollToPastEvents) {
      const section = document.getElementById("past_events");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  useEffect(() => {
    sessionStorage.clear();
  });

  return (
    <main>
      {/* Position the canvas absolutely on the page */}
      {/* <div className="overflow-hidden">
        <canvas
          id="fireworks-canvas"
          style={{
            backgroundColor: "white",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1, // Ensure it appears behind other content
          }}
        ></canvas>
      </div> */}
      {/* <Navbar /> */}
      <Navigation />

      <HomeMain />
      <About />
      <SpeakersSection />
     <Sponsors />
      <PastEvent />
       <Footer />
    </main>
  );
}
