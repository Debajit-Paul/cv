import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Debajit Paul",
  initials: "DP",
  location: "Kolkata, India, WB",
  locationLink: "https://www.google.com/maps/place/Kolkata",
  about:
    "Self taught Jr. Full Stack Engineer dedicated to building high-quality products.",
  summary:
    "As a Full Stack Engineer, I specialize in taking products from concept to launch. I excel in leading teams and creating environments where individuals perform at their best. Currently, I work mostly with TypeScript, React, Node.js, and GraphQL. I have over 8 years of experience working remotely with companies worldwide.",
  avatarUrl:
    "https://media.licdn.com/dms/image/D4D03AQHT3HjFBVseYw/profile-displayphoto-shrink_800_800/0/1714972755020?e=1724284800&v=beta&t=Wbp2kepfuKSPa6ygfGEEtZMixaXK2rl9bAIdZgVTpGs",
  personalWebsiteUrl: "",
  contact: {
    email: "debajitfan@gmail.com",
    tel: "+917003011120",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Debajit-Paul",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/debajit--paul/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/Devojit_paul",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Calcutta University",
      degree: "Bachelor's Degree in Commerce",
      start: "2018",
      end: "2021",
    },
    {
      school: "The George Telegraph Traning Institute",
      degree: "Computer Application Programing",
      start: "2018",
      end: "2020",
    },
  ],
  work: [
    {
      company: "HireKarma",
      link: "https://www.linkedin.com/company/hirekarma-pvt-ltd/",
      badges: ["Remote"],
      title: "Web Developer",
      logo: ConsultlyLogo,
      start: "Jun 2024",
      end: null,
      description:
        "Developing UI of the HireKarma platform. Technologies: JavaScript, Tailwind, GSAP",
    },
    {
      company: "NotInLine",
      link: "https://www.linkedin.com/company/notinline",
      badges: ["Remote Intern"],
      title: "Web Developer",
      logo: ConsultlyLogo,
      start: "Sept 2023",
      end: "Mar 2024",
      description:
        "Redesigning the whole front end of NotInLine web platform using reusable optimized components and responsive designs to serve 3000+ users, 140+ doctors, across all devices ",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Node.js",
    "SQL/NoSQL",
    "MERN Stack",
    "WebRTC",
  ],
  projects: [
    {
      title: "Glide",
      techStack: [
        "Full Stack Developer",
        "JavaScript",
        "React",
        "FireBase",
        "WebRTC",
      ],
      description:
        "A Peer-to-Peer video calling service built on webRTC for secure meetings",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://glidechat.netlify.app/",
      },
    },
    {
      title: "sneakerhead",
      techStack: [
        "Full Stack Developer",
        "JavaScript",
        "Next",
        "Tailwind",
        "Redux",
        "Sanity",
        "Stripe",
      ],
      description:
        "An Ecommerce site for Sneakers with Stripe, Sanity and user login authentication",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://sneakerheadstore.vercel.app/",
      },
    },
    {
      title: "snoopify",
      techStack: ["JavaScript", "React", "Tailwind", "Redux"],
      description:
        "A Music Streaming Platform, music discovery, recommendations and top trending charts",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://snoopify.netlify.app/",
      },
    },
  ],
} as const;
