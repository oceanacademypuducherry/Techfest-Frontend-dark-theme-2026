import { useEffect,useRef, useLayoutEffect  }  from "react";

import { useLocation, useNavigate } from "react-router-dom";
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

  const location = useLocation();


const navigate = useNavigate();


const pastEventsRef = useRef(null);

useEffect(() => {
  if (!location.hash) return;

  const element = document.querySelector(location.hash);

  if (element) {
    setTimeout(() => {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 150);
  }
}, [location]);

 useEffect(() => {
  sessionStorage.clear();
}, []);

  return (
    <main>
      
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
