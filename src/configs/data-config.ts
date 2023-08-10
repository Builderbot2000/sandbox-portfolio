import { MemberProfile, ProjectProfile } from "../types/types";
import { StackIcons } from "../types/iconTypes";

export const version = 1.0;

export const teamDescription =
  "We are a group of friends who share a common interest in making web applications, \
  and here is where we pool our talents and ideas to make our big projects possible.";

export const memberProfiles: Array<MemberProfile> = [
  {
    entryPath: "kevin",
    name: "Kevin Tang",
    avatarSrc: "adventure-avatar.png",
    position: "Freelance Web Developer",
    quote: "Web Applications Geek / Cloud Solutions Enthusiast",
    email: "kevintang1118@outlook.com",
    stack: [
      StackIcons.javascript,
      StackIcons.python,
      StackIcons.c,
      StackIcons.cpp,
      StackIcons.java,
      StackIcons.nodejs,
      StackIcons.react,
      StackIcons.express,
      StackIcons.redux,
      StackIcons.jest,
      StackIcons.gcp,
      StackIcons.mongodb,
      StackIcons.postman,
      StackIcons.git,
      StackIcons.html,
      StackIcons.css,
      StackIcons.typescript,
      StackIcons.materialUI,
    ],
  },
  {
    entryPath: "jaskaran",
    name: "Jaskaran Dhanoa",
    avatarSrc: "js-avatar.png",
    position: "Fullstack Developer at BC Cancer Agency",
    quote:
      "I am a team player who can collaborate effectively with other developers, designers, and stakeholders.",
    email: "jsdhanoa@sfu.ca",
    stack: [
      StackIcons.javascript,
      StackIcons.python,
      StackIcons.c,
      StackIcons.rust,
      StackIcons.cpp,
      StackIcons.csharp,
      StackIcons.java,
      StackIcons.nodejs,
      StackIcons.react,
      StackIcons.express,
      StackIcons.django,
      StackIcons.redux,
      StackIcons.selenium,
      StackIcons.jest,
      StackIcons.mssql,
      StackIcons.docker,
      StackIcons.gcp,
      StackIcons.postgresql,
      StackIcons.mongodb,
      StackIcons.postman,
      StackIcons.git,
    ],
  },
];

export const projectProfiles: Array<ProjectProfile | null> = [
  {
    name: "job filter",
    disabled: false,
    description:
      "Web scraper that filters down postings from job boards based on user set parameters",
    demoLink: "https://main.dpqf2rdccffs2.amplifyapp.com/",
    githubLink: "https://github.com/Builderbot2000/job-scraper",
    pictureSrc: "job-boards.png",
  },
  {
    name: "TAI",
    disabled: false,
    description:
      "Educational discussion board where ChatGPT is integrated to serve as the teaching assistant.",
    demoLink: "https://tai-client-v2-svcawpadva-uw.a.run.app/",
    pictureSrc: "teaching.png",
  },
  {
    name: "map master",
    disabled: true,
    description:
      "Roleplay map management system that automatically handles player request for map changes",
    demoLink: "http://www.google.com",
    pictureSrc: "tutoriala.jpg",
  },
  null,
];
