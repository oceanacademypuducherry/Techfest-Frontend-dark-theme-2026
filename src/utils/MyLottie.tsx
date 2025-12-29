import React from 'react';
import Lottie from 'lottie-react';
import { FAILURE_ANIMATION, SUCCESS_ANIMATION } from '../assets/images/lotties';

interface MyLottieProps {
    type: 'success' | 'failure';
}

export const MyLottie: React.FC<MyLottieProps> = ({ type }) => {
    const animationData = type === 'success' ? SUCCESS_ANIMATION : FAILURE_ANIMATION;

    return <Lottie animationData={animationData} loop={true} style={{ height: 180, width: 180 }} />;
};
