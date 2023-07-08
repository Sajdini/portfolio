"use client";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineArrowRight } from "react-icons/ai";
import "../app/globals.css";
interface NavLinkProps {
  href: string;
  text: string;
}

const NavLink = ({ href, text }: NavLinkProps) => {
  return (
    <a href={`/#${href}`} className="mr-[5px] sm:mr-[2rem]  ">
      <p
        className={`   font-bold text-xl sm:tracking-wide tracking-tight transition ease-in-out  duration-300 hover:text-slate-400`}
      >
        {text}
      </p>
    </a>
  );
};

const Nav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <nav className="py-3 w-full max-w-[1300px] m-auto mb-[5rem] lg:mb-0">
      <div className="flex justify-between ">
        <div className="font-bold text-4xl ml-[10px] sm:ml-[2rem]">
          <p className="text-cyan-950">
            s<span className="text-amber-400">aj.</span>
          </p>
        </div>
        <>
          <div
            onClick={() => setOpenMenu(true)}
            className=" text-4xl pr-2 md:hidden cursor-pointer text-amber-400"
          >
            <AiOutlineMenu />
          </div>
          <div
            onClick={() => setOpenMenu(false)}
            className={`${
              !openMenu && "hidden"
            } fixed top-0 right-0 bottom-0 left-0  z-40  bg-black bg-opacity-[0.5]`}
          />
          <div
            className={`flex flex-col items-center gap-1 h-[100vh] z-40 ${
              openMenu ? "menu-open" : "menu-closed"
            }  bg-amber-400 text-cyan-900 fixed top-0 right-0 w-[50%]`}
          >
            <div
              className="self-start text-4xl pt-3 pl-1 cursor-pointer "
              onClick={() => setOpenMenu(false)}
            >
              <AiOutlineArrowRight />
            </div>
            <NavLink href="about" text="About" />
            <NavLink href="projects" text="Projects" />
            <NavLink href="contact" text="Contact " />
          </div>
        </>

        <div className="hidden md:flex text-slate-200 ">
          <NavLink href="about" text="About " />
          <NavLink href="projects" text="Projects" />
          <NavLink href="contact" text="Contact " />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
