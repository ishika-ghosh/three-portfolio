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
    link: "https://expo.dev/artifacts/eas/myMx6aaGKsjMbVNPeP8NGq.apk",
    github: "https://github.com/ishika-ghosh/moneymate_frontend",
    color: "#f7389437",
    imageUrl: "./moneymate.png",
    iconLists: [
      "./tech/native.svg",
      "./tech/express.svg",
      "./tech/mongodb.png",
    ],
  },
];
export const experiences = [
  {
    title: "Jr Software Developer Intern",
    company_name: "ATOMOS Technologies",
    date: "Jul 2024 - Dec 2024",
    points: "Developing and maintaining web applications using Next.js ",
    tech: ["Postgres SQL", "Next JS", "API"],
  },
  {
    title: "System Engineer",
    company_name: "Tata Consultancy Services (TCS)",
    date: "Mar 2024 - Present",
    points:
      "Part of the NSDL project at TCS, involved in development and validation of the CA/ACA module with a focus on secure transaction processing and regulatory compliance. ",
    tech: ["JAVA", "Spring"],
  },
];
export const data = [
  {
    title: "About Me",
    speed: 0.6,
  },
  {
    title: "I’m a software engineer at Tata Consultancy Services (TCS), ",
    speed: 0.8,
  },
  {
    title:
      "where I work on designing and developing scalable enterprise solutions.I’m passionate about writing clean, efficient code and tackling complex backend challenges. ",
    speed: 0.7,
  },
  {
    title:
      "My experience spans file processing, validation frameworks, and system integration for large-scale applications.I enjoy learning new technologies and improving the reliability and performance of the systems I build.",
    speed: 0.8,
  },
  {
    title:
      "Beyond coding, I value collaboration, continuous growth, and creating solutions that make a meaningful impact.",
    speed: 0.9,
  },
  {
    title:
      "I take pride in delivering high-quality work that blends technical precision with real-world usability.Outside of work, I love exploring new ideas, upskilling myself, and contributing to projects that inspire innovation.",
    speed: 1.0,
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
