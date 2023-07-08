"use client";
import React from "react";
import data from "../public/projects.json";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { useMediaQuery } from "react-responsive";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface P {
  project: (typeof data)[0];
}
const ProjectCard = ({ project }: P) => {
  return (
    <div className="w-full  max-w-[300px]  rounded-lg  bg-amber-400  pb-1 mt-5 ">
      <div className="rounded-tl-[8px] rounded-tr-[8px]  border-2 border-slate-200 overflow-hidden ">
        <Image width={300} height={350} src={project.img} alt="project image" />
      </div>

      <div className="  text-slate-800 py-3 px-4  ">
        <div className=" max-h-[24px] mb-[8.125rem]">
          <h3 className="text-2xl font-bold ">{project.name}</h3>
          <p className=" text-xl lg:text-base block">{project.description}</p>
        </div>

        <div className="mb-[6.25rem] max-h-[20px]">
          <p className=" text-xl font-bold ">Stack</p>
          {project.stack?.map((item: string, index: number) => (
            <span key={index} className="text-xl lg:text-base capitalize">
              {project.stack[project.stack.length - 1] !== item
                ? `${item}, `
                : item}
            </span>
          ))}
        </div>

        <div className="max-w-[150px]">
          <Link href={project.url}>
            <div className="rounded-lg border-solid border-slate-800 border-2 p-3 w-auto  transition ease-in-out  duration-300 hover:bg-slate-800 hover:text-amber-200 ">
              <p className="inline">Visit website</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const isBigScreen = useMediaQuery({ query: "(min-width: 1200px)" });
  const isMediumScreen = useMediaQuery({ query: "(min-width: 900px)" });
  const isSmallScreen = useMediaQuery({ query: "(min-width: 600px)" });
  const carouselUnitShow = () => {
    if (isMediumScreen) return 3;
    if (isSmallScreen) return 2;
    return 1;
  };

  const carouselSpace = () => {
    if (isBigScreen) return 60;
    if (isMediumScreen) return 50;
    if (isSmallScreen) return 30;
    return 15;
  };

  return (
    <div className="w-full px-[10px] xl:px-0">
      <h2 className="text-4xl font-bold text-slate-200 mb-10 ">
        Some of the projects i have worked on...
      </h2>
      <div className=" w-full pb-4   px-2 rounded-lg  bg-slate-800  ">
        <Swiper
          style={{ padding: "0 4rem 4rem" }}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={carouselSpace()}
          slidesPerView={carouselUnitShow()}
          navigation={true}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <ProjectCard project={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Projects;
