
// import {tea} from "../../../assets/images/lotties/index";
import {tea} from "../../../assets/images/lotties"

import Lottie from "lottie-react"
export const getTeaBreakAnimation = () => {
    return <Lottie animationData={tea} loop style={{ width: "100px", height: "100px",  objectFit: "contain"  }} />;
};