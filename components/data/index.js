import {
  FifthCard,
  FirstCard,
  FourthCard,
  SecondCard,
  SixthCard,
  ThirdCard,
} from "../ProjectCards/PhotoCard";
import { LuGithub } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Experience", link: "#work" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];
export const projects = [
  {
    id: 1,
    title: "LMS- SaaS platform",
    des: "A multitetant SaaS platform to manage learning materials for various institutions.A multitetant SaaS platform to manage learning materials for various institutions.",
    card: FirstCard,
    link: "/ui.earth.com",
    color: "#3532ea33",
    imageUrl: "https://purnadip-manna.github.io/img/lms.png",
    iconLists: ["./re.svg", "./re.svg", "./re.svg"],
  },
  {
    id: 2,
    title: "TrackExp",
    des: "An application to track daily expenses and analysis your expenses.",
    card: SecondCard,
    link: "/ui.yoom.com",
    color: "#d138f737",
    imageUrl: "https://purnadip-manna.github.io/img/trackexp.png",
    iconLists: ["./re.svg", "./re.svg", "./re.svg"],
  },
  {
    id: 3,
    title: "MRBS- Meeting Room Booking System",
    des: "A meeting room booking system for an organization to book their meeting rooms.",
    card: ThirdCard,
    link: "/ui.aiimg.com",
    color: "#f7389437",
    imageUrl: "https://purnadip-manna.github.io/img/mrbs.png",
    iconLists: ["./re.svg", "./re.svg", "./re.svg"],
  },
  // {
  //   id: 4,
  //   title: "Animated Apple Iphone 3D Website",
  //   des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
  //   card: FourthCard,
  //   link: "/ui.apple.com",
  //   color: "#38c1f737",
  //   imageUrl:
  //     "https://images.unsplash.com/photo-1517476417305-21d49f984355?ixid=M3wxMTI1OHwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTg0MzUzM3w&ixlib=rb-4.0.3&q=85&w=2160",
  // },
  // {
  //   id: 5,
  //   title: "Animated Apple Iphone 3D Website",
  //   des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
  //   card: FifthCard,
  //   link: "/ui.apple.com",
  //   color: "#38f73e37",
  //   imageUrl:
  //     "https://images.unsplash.com/photo-1517476417305-21d49f984355?ixid=M3wxMTI1OHwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTg0MzUzM3w&ixlib=rb-4.0.3&q=85&w=2160",
  // },
  // {
  //   id: 6,
  //   title: "Animated Apple Iphone 3D Website",
  //   des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
  //   card: SixthCard,
  //   link: "/ui.apple.com",
  //   color: "#fb772b37",
  //   imageUrl:
  //     "https://images.unsplash.com/photo-1517476417305-21d49f984355?ixid=M3wxMTI1OHwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTg0MzUzM3w&ixlib=rb-4.0.3&q=85&w=2160",
  // },
];
export const experiences = [
  {
    title: "Technical Intern",
    company_name: "Tutoraj (Tamil Nadu, India)",
    date: "Sep 2020 - Nov 2020",
    points: "Developing and maintaining web applications using React.js ",
    tech: ["MySql", "PHP", "Wordpress", "Javascript"],
  },
  {
    title: "Backend Developer",
    company_name: "SwiftSku (California, United States)",
    date: "Jul 2022 - Sep 2022",
    points: "Developing and maintaining web applications using React.js ",
    tech: ["Python", "FAST API", "Salesforce API"],
  },
  {
    title: "Software Engineer Intern",
    company_name: "GeoTech Infoservices Pvt Ltd. (Kolkata, India)",
    date: "Jan 2023 - Jun 2023",
    points: "Developing and maintaining web applications using React.js ",
    tech: ["Java", "SpringBoot", "React", " AWS"],
  },
  {
    title: "Software Engineer",
    company_name: "GeoTech Infoservices Pvt Ltd. ",
    date: "Apr 2024 - Present",
    points: "Developing and maintaining web applications using React.js ",
    tech: ["Microservice", "GRPC", "Rabbit MQ ", "REST API"],
  },
];
export const data = [
  {
    title: "About Me",
    speed: 0.6,
  },
  {
    title: "My name is Purnadip Manna. I am a Software Engineer at ",
    speed: 0.8,
  },
  {
    title:
      "GeoTech Infoservices Private Limited. I am from Howrah, West Bengal, India. ",
    speed: 0.7,
  },
  {
    title: "I have completed my B.Tech (in Computer Science & Engineering)",
    speed: 0.8,
  },
  {
    title:
      "in 2023 from Techno International New Town, Kolkata.I'm a software engineer who loves bringing ideas to life by building applications from",
    speed: 0.9,
  },
  {
    title:
      " scratch.I find it rewarding to design strong foundations for these applications, making them efficient and adaptable as they grow. ",
    speed: 0.9,
  },
  {
    title:
      "I write clear, well-organized code that's easy for everyone to understand, including myself and my teammates. ",
    speed: 1,
  },
];
export const socialMedia = [
  {
    id: 1,
    icon: LuGithub,
  },
  {
    id: 2,
    icon: FaLinkedinIn,
  },
  {
    id: 3,
    icon: FaTwitter,
  },
];
export const technologies = [
  {
    name: "HTML 5",
    icon: "./tech/html.png",
  },
  {
    name: "CSS 3",
    icon: "./tech/css.png",
  },
  {
    name: "JavaScript",
    icon: "./tech/javascript.png",
  },
  {
    name: "TypeScript",
    icon: "./tech/typescript.png",
  },
  {
    name: "React JS",
    icon: "./tech/reactjs.png",
  },
  {
    name: "Redux Toolkit",
    icon: "./tech/redux.png",
  },
  {
    name: "Tailwind CSS",
    icon: "./tech/tailwind.png",
  },
  {
    name: "Node JS",
    icon: "./tech/nodejs.png",
  },
  {
    name: "MongoDB",
    icon: "./tech/mongodb.png",
  },
  {
    name: "Three JS",
    icon: "./tech/threejs.svg",
  },
  {
    name: "git",
    icon: "./tech/git.png",
  },
];
