"use client";
import LottieImg from "./Lottie";
import { useMediaQuery } from "react-responsive";
const Hero = () => {
  const midScreen = useMediaQuery({
    query: "(min-width:638px)",
  });
  const heroHeight = midScreen ? "calc(100vh - 28px)" : "";

  return (
    <div className=" px-[5px] lg:px-[0px] w-full h-full flex  items-center heroHeight">
      <div className=" w-full flex flex-col-reverse justify-between items-center lg:flex-row ">
        <div className="basis-1/2">
          <LottieImg />
        </div>
        <div className="basis-1/2 text-center  lg:text-left   ">
          <p className="text-3xl font-medium text-slate-200 mb-4 letter-5">
            Hi there! And welcome
          </p>
          <h1 className="text-7xl font-bold   text-cyan-900">
            I&rsquo;m Samir
          </h1>
          <h1 className="text-6xl font-bold text-slate-200 leading-tight ">
            a software{" "}
            <p className="inline-block  text-amber-400 underline decoration-3   ">
              web
            </p>{" "}
            developer.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
