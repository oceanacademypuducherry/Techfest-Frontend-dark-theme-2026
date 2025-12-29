import Lottie from "react-lottie";
import { BIRD } from "../../../assets/images/lotties";


interface BirdLottieProps {
    isPaused: boolean; // Accept pause state
  }

export const BirdLottie = ({ isPaused }: BirdLottieProps) => {
    const defaultOptions = {
        loop: true, // Ensures continuous looping
        autoplay: true, // Starts automatically
        animationData: BIRD,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };
    return (
        <div className="lottie-wrapper">
            <div className="lottie-container">
                <Lottie
                    options={defaultOptions}
                    style={{ height: 20, width: 20 }}
                    isPaused={isPaused}
                />
            </div>
        </div>
    );
};
