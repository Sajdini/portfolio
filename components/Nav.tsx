import React from "react";

interface NavLinkProps {
  href: string;
  text: string;
}

const NavLink = ({ href, text }: NavLinkProps) => {
  return (
    <a href={`/#${href}`} className="mr-[5px] sm:mr-[2rem] ">
      <p className="text-slate-200  font-bold text-xl tracking-wide transition ease-in-out  duration-300 hover:text-slate-400">
        {text}
      </p>
    </a>
  );
};

const Nav = () => {
  return (
    <nav className="py-3 w-full max-w-[1300px] m-auto mb-[5rem] lg:mb-0">
      <div className="flex justify-between ">
        <div className="font-bold text-4xl ml-[10px] sm:ml-[2rem]">
          <p className="text-cyan-950">
            s<span className="text-amber-400">aj.</span>
          </p>
        </div>
        <div className="flex">
          <NavLink href="about" text="About " />
          <NavLink href="projects" text="Projects" />
          <NavLink href="contact" text="Contact " />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
