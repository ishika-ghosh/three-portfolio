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
  // { name: "Experience", link: "#work" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];
export const projects = [
  {
    id: 1,
    title: "TreasuredTales",
    des: "TreasuredTales is a captivating web app designed to help you store, share, and cherish your most treasured memories and stories with others. With TreasuredTales, you can create a virtual space where you can store your memories, whether it's a heartwarming anecdote, a significant milestone, or a memorable adventure.",
    card: FirstCard,
    link: "https://github.com/ishika-ghosh/TreasuredTales",
    github: "https://github.com/ishika-ghosh/TreasuredTales",
    color: "#3532ea33",
    imageUrl: "./app-image.png",
    iconLists: [
      "./re.svg",
      "./tech/express.svg",
      "./tech/mongodb.png",
      "./tech/redux.png",
    ],
  },
  {
    id: 2,
    title: "BrainRush 2K24",
    des: "A web-based platform designed to streamline the organization and management of offline events with an integrated quiz portal.It provides essential features such as user registration, Google authentication, hall ticket generation, offline payment processing, and event management. It also includes an admin portal for event coordination and logistics.Led the team, brainstormed ideas, and worked on frontend and backend guiding other members.The platform had almost 450 users at the time of the event.",
    card: SecondCard,
    link: "https://brainrushtest.vercel.app/",
    github: "https://github.com/ishika-ghosh/brainrush-2k24-test",
    color: "#d138f737",
    imageUrl: "./brainrush.png",
    iconLists: ["./tech/next.svg", "./tech/redux.png", , "./tech/mongodb.png"],
  },
  {
    id: 3,
    title: "MoneyMate",
    des: "An Expense Tracking App with Shared Budget makes managing group and personal finances effortless. It tracks shared expenses, calculates contributions, and resolves balances while offering personal expense tracking with insightful statistics and trends for complete financial clarity.",
    card: ThirdCard,
    link: "https://expo.dev/artifacts/eas/cqewf9UyXzeKnivGXMkuM6.apk",
    github: "https://github.com/ishika-ghosh/moneymate_frontend",
    color: "#f7389437",
    imageUrl: "./moneymate.png",
    iconLists: [
      "./tech/native.svg",
      "./tech/express.svg",
      "./tech/mongodb.png",
    ],
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
    title: "My name is Ishika Ghsoh. I am a Btech Computer Science ",
    speed: 0.8,
  },
  {
    title:
      "Graduate from MCKV Institute of Engineering. I am from Howrah, West Bengal, India. ",
    speed: 0.7,
  },
  {
    title: "I am also a freelancer",
    speed: 0.8,
  },
  {
    title:
      "with the experience of building real client projects.I'm a software engineer who loves bringing ideas to life by building applications from",
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
    link: "https://github.com/ishika-ghosh",
  },
  {
    id: 2,
    icon: FaLinkedinIn,
    link: "https://www.linkedin.com/in/ishika-ghosh20112002/",
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
