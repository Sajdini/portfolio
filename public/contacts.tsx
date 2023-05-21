import { FaHtml5, FaCss3, FaSass, FaReact, FaNodeJs } from "react-icons/fa";
import { AiOutlineAntDesign } from "react-icons/ai";
import { TbBrandNextjs, TbBrandPrisma } from "react-icons/tb";
import {
  SiMui,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiGraphql,
  SiHasura,
  SiCypress,
} from "react-icons/si";
import {
  SiGmail,
  SiLinkedin,
  SiGithub,
  SiFacebook,
  SiTelegram,
  SiInstagram,
} from "react-icons/si";

export const contactData = [
  { link: "ajdinis1993@gmail.com", icon: <SiGmail /> },
  { link: "https://www.linkedin.com/in/samir-ajdini/", icon: <SiLinkedin /> },
  { link: "https://github.com/Sajdini", icon: <SiGithub /> },
  { link: "@AjdiniS", icon: <SiFacebook /> },
  { link: "https://www.facebook.com/", icon: <SiTelegram /> },
  { link: "https://www.instagram.com/ajdini_s/", icon: <SiInstagram /> },
];

export const techData = [
  { tech: "HTML", icon: <FaHtml5 className="w-full h-full" /> },
  { tech: "CSS", icon: <FaCss3 className="w-full h-full" /> },
  { tech: "Antd", icon: <AiOutlineAntDesign className="w-full h-full" /> },
  { tech: "MUI", icon: <SiMui className="w-full h-full" /> },
  { tech: "SiTailwindcss", icon: <SiTailwindcss className="w-full h-full" /> },
  { tech: "Sass", icon: <FaSass className="w-full h-full" /> },
  { tech: "Javascript", icon: <SiJavascript className="w-full h-full" /> },
  { tech: "Typescript", icon: <SiTypescript className="w-full h-full" /> },
  { tech: "React", icon: <FaReact className="w-full h-full" /> },
  { tech: "Nextjs", icon: <TbBrandNextjs className="w-full h-full" /> },
  { tech: "Nodejs", icon: <FaNodeJs className="w-full h-full" /> },
  { tech: "Graphql", icon: <SiGraphql className="w-full h-full" /> },
  { tech: "Prisma", icon: <TbBrandPrisma className="w-full h-full" /> },
  { tech: "Hasura", icon: <SiHasura className="w-full h-full" /> },
  { tech: "Cypress", icon: <SiCypress className="w-full h-full" /> },
];
