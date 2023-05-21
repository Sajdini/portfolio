"use client";

import lotie from "../public/lottie.json";
import Lottie from "lottie-react";
const LottieImg = () => {
  return <Lottie animationData={lotie} loop={true} className="w-[90%]" />;
};

export default LottieImg;
