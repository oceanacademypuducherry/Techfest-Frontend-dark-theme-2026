import { useState } from "react";
import { IMGS } from "../../../assets/images/HomeLogo/ImageSrcs";
import { BirdLottie } from "../ui/BirdLottie";
import { AutoLottie, FireworksLottie } from "../ui";


function Hero() {
  const [isPaused, setIsPaused] = useState(false);

  // Toggle both hero animation and AutoLottie wheel
  const handleClick = () => {
    setIsPaused(!isPaused);
  };

  return (
    <div className="hero-container">
      <div className="image-wrapper">
       {/* Plane Image with movement */}
       <div className={`plane-wrapper ${isPaused ? "paused" : ""}`}>
         {/* Plane Image */}
          <img src={IMGS.PLANE_SVG} alt="Plane" className="plane-image" />
        </div>
        
    {/* PONDICHERRY Text */}
    {/* <div className="text-pondy-container">
    <div className="pondicherry-text">PONDICHERRY</div>
    </div> */}
        {/* Cloud Image */}
  <div className="cloud-wrapper">
    <img src={IMGS.CLOUD1_SVG} alt="Cloud" className={`cloud cloud-1 ${isPaused ? "paused" : ""}`} />
    <img src={IMGS.CLOUD2_SVG} alt="Cloud" className={`cloud cloud-2 ${isPaused ? "paused" : ""}`} />
    <img src={IMGS.CLOUD3_SVG} alt="Cloud" className={`cloud cloud-3 ${isPaused ? "paused" : ""}`} />
    <img src={IMGS.CLOUD5_SVG} alt="Cloud" className={`cloud cloud-4 ${isPaused ? "paused" : ""}`} />
    <img src={IMGS.CLOUD1_SVG} alt="Cloud" className={`cloud cloud-5 ${isPaused ? "paused" : ""}`}/>
    <img src={IMGS.CLOUD4_SVG} alt="Cloud" className={`cloud cloud-6 ${isPaused ? "paused" : ""}`} />
    <img src={IMGS.CLOUD2_SVG} alt="Cloud" className={`cloud cloud-7 ${isPaused ? "paused" : ""}`} />
    <img src={IMGS.CLOUD3_SVG} alt="Cloud" className={`cloud cloud-8 ${isPaused ? "paused" : ""}`} />
    <img src={IMGS.CLOUD4_SVG} alt="Cloud" className={`cloud cloud-9 ${isPaused ? "paused" : ""}`} />
    <img src={IMGS.CLOUD5_SVG} alt="Cloud" className={`cloud cloud-10 ${isPaused ? "paused" : ""}`}/>
  </div>

        {/* Hero animation */}
        <div className={`hero-animation ${isPaused ? "paused" : ""}`}>
        <div className="fireworks-wrapper">
    <FireworksLottie />
  </div>
          <div className="bird bird-1">
            <BirdLottie isPaused={isPaused}/>
          </div>
          <div className="bird bird-2">
            <BirdLottie isPaused={isPaused}/>
          </div>
          <div className="bird bird-3">
            <BirdLottie isPaused={isPaused}/>
          </div>
          <div className="bird bird-4">
            <BirdLottie isPaused={isPaused}/>
          </div>
          <div className="bird bird-5">
            <BirdLottie isPaused={isPaused}/>
          </div>
           <div>
            
           </div>
          {/* Hero Image */}
          <div className="hero">
          <img src={IMGS.HERO_PNG} alt="Hero" className="hero-image" />
          </div>
        </div>
        
        {/* AutoLottie - Click to pause both animations */}
        <div className="lottie-container" onClick={handleClick}>
          <AutoLottie isPaused={isPaused} />
        </div>
        
      </div>
    </div>
  );
}

export default Hero;
