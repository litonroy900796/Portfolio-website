import { GoDeviceDesktop } from "react-icons/go";
import {
  MdOutlineAppSettingsAlt,
  MdOutlineDesignServices,
} from "react-icons/md";
import { SiAdobeindesign } from "react-icons/si";

export const ABOUT = {
  title: "About Me",
  name: "Liton Chandra Barman",
  description:
    "I am Liton Chandra Barman and I am a web designer.I love coding.I have strong knowledge of web architechure and frontend latest technology as react with good skill of HTML,CSS, and Javascript or some basic styling framework such as bootstrap etc",
  exports: ["JavaScript", "React", "UI/UX"],
  image: "/Asset/me2.png",
  services: [
    {
      title: "Font-End Developer",
      text: "Front-end web development The developer or web designer who creates the visual static web pages of the website according to the drawings or plans is called front-end web developer..",
      icon: <GoDeviceDesktop size={33} />,
    },
    {
      title: "Responsive Design",
      text: "Responsive design is an approach to web page creation that makes use of flexible layouts, flexible images and cascading style sheet media queries.",
      icon: <MdOutlineAppSettingsAlt size={33} />,
    },
    {
      title: "UI/UX Design",
      text: "A UI/UX designer's job is to create user-friendly interfaces that enable users to understand how to use complex technical products.",
      icon: <MdOutlineDesignServices size={33} />,
    },
    {
      title: "Web Design",
      text: "Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development rather than software development.",
      icon: <SiAdobeindesign size={33} />,
    },
  ],
};
