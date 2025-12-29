
import lunch from "../../../assets/images/lotties/lunch.json"

import Lottie from "lottie-react";
export const getLunch = () => {
    return <Lottie animationData={lunch} loop style={{ width: "100px", height: "100px",  objectFit: "contain"  }} />;
};