"use client";
import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Tech from "./Tech";
import { useMediaQuery } from "react-responsive";
const About = () => {
  const midScreen = useMediaQuery({
    query: "(max-width:640px)",
  });

  const deviceScreen = midScreen ? 255 : 350;

  return (
    <div className=" w-full rounded-lg   ">
      <h2 className="text-4xl font-bold text-slate-200  max-w-[1300px] mx-auto ">
        About me
      </h2>
      <div className="max-w-[1300px] lg:mx-auto lg:flex lg:justify-between  ">
        <div className="w-full flex flex-col gap-[0.5rem] py-[2rem] lg:basis-1/2">
          <div className="max-w-[300px] sm:max-w-[450px] self-start p-2 lg:max-w-[600px]  bg-amber-400 rounded-tr-lg rounded-br-lg lg:rounded-bl-lg">
            <p className="text-slate-200 text-xl">
              I am a passionate Software developer, with several years of
              experience in Frontend development. It all started a couple of
              years ago when I decided to restart my career as a web developer,
              and I enrolled in Gsix Academy for Android development.
            </p>
          </div>
          <div className="self-center lg:hidden ">
            <div className=" w-[210px] h-[210px] lg:w-[350px] lg:h-[350px] md:w-[255px] md:h-[255px]   relative  mb-[3rem] ">
              <Image
                src={"/image.jpeg"}
                alt="profile picture"
                width={deviceScreen}
                height={deviceScreen}
                className="absolute top-0 left-0 right-0 bottom-0 m-auto  transform translate-x-6 translate-y-6  rotate-[12deg] z-20 "
              />
              <div className=" absolute inset-0  bg-amber-400  z-10" />
              <div className="absolute inset-0  bg-slate-800 transform translate-x-3 translate-y-3  rotate-[6deg]  z-10" />
            </div>
          </div>
          <div className=" max-w-[300px] sm:max-w-[450px] self-end p-2 relative lg:max-w-[600px]  bg-slate-800 lg:rounded-bl-xl rounded-tl-xl lg:rounded-br-xl   rounded-bl-xl lg:translate-x-10">
            <p className="text-slate-200 text-xl">
              Simultaneously, i went on learning by myself web development,
              finding Javascript and its frameworks quite attractive. A lot of
              side projects, practices, internships, and working positions
              later, here i am, still curious, passionate and excited whenever
              it comes to software development.
            </p>
          </div>
        </div>

        <div className="hidden lg:block lg:basis-1/3 ">
          <div className=" w-[210px] h-[210px] lg:w-[350px] lg:h-[350px] md:w-[255px] md:h-[255px]   relative  mb-[3rem] ">
            <Image
              src={"/image.jpeg"}
              alt="profile picture"
              width={deviceScreen}
              height={deviceScreen}
              className="absolute top-0 left-0 right-0 bottom-0 m-auto  transform translate-x-6 translate-y-6  rotate-[12deg] z-20  "
            />
            <div className=" absolute inset-0  bg-amber-400  z-10" />
            <div className="absolute inset-0  bg-slate-800 transform translate-x-3 translate-y-3  rotate-[6deg]  z-10" />
          </div>
        </div>
      </div>
      <Tech />
    </div>
  );
};

export default About;
