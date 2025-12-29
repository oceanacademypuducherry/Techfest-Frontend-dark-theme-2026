import Lottie from "react-lottie";
import { FIREWORKS } from "../../../assets/images/lotties";


export const FireworksLottie = () => {
    const defaultOptions = {
        loop: true, // Ensures continuous looping
        autoplay: true, // Starts automatically
        animationData: FIREWORKS,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };
    return (
        <div>
            <div>
                <Lottie
                    options={defaultOptions}
                    style={{ height: 150, width:150 }}
                    
                />
            </div>
        </div>
    );
};
