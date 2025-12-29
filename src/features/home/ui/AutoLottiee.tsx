import Lottie from "react-lottie";
import { AUTO } from "../../../assets/images/lotties";


// Define the prop type for AutoLottie
interface AutoLottieProps {
  isPaused: boolean; // Explicitly declare that `isPaused` is a boolean
}

export const AutoLottie = ({ isPaused }: AutoLottieProps) => {
  const defaultOptions = {
    loop: true, // Ensures continuous looping
    autoplay: true, // Starts automatically
    animationData: AUTO,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="lottie-wrapper">
      <div className="lottie-container">
        <Lottie
          options={defaultOptions}
          isPaused={isPaused} // Controls animation pause/resume
        />
      </div>
    </div>
  );
};
