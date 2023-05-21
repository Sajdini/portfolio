import React from "react";
import data from "../public/projects.json";
import Image from "next/image";
import Link from "next/link";
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
  return (
    <div className="w-full px-[10px]">
      <h2 className="text-4xl font-bold text-slate-200 mb-10 ">
        Some of the projects i have worked on...
      </h2>
      <div className=" w-full  py-5 px-2 rounded-lg  bg-slate-800  ">
        <div className="flex flex-wrap justify-center gap-[5px] md:justify-center items-stretch lg:gap-5 ">
          {data.map((item, index) => (
            <ProjectCard project={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
