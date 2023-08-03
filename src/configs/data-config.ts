import { MemberProfile, ProjectProfile } from "../types/types";
import { StackIcons } from "../types/iconTypes";

export const version = 1.0;

export const teamDescription =
  "We are a group of friends who share a common interest in making web applications, \
  and here is where we pool our talents and ideas to make the big projects possible.";

export const memberProfiles: Array<MemberProfile> = [
  {
    entryPath: "kevin",
    name: "Kevin Tang",
    avatarSrc: "adventure-avatar.jpg",
    position: "Freelance Web Developer",
    quote: "Cloud solutions enthusiast",
    email: "kevintang1118@outlook.com",
    stack: [
      StackIcons.javascript,
      StackIcons.html,
      StackIcons.css,
      StackIcons.react,
      StackIcons.nodejs,
      StackIcons.express,
      StackIcons.mongodb,
      StackIcons.redux,
      StackIcons.typescript,
      StackIcons.materialUI,
    ],
  },
  {
    entryPath: "david",
    name: "David Smith",
    avatarSrc: "webdev-avatar.png",
    position: "Fullstack Developer at BC Cancer Agency",
    quote: "Loves seeing things click together",
    email: "dsmith@outlook.com",
    stack: [
      StackIcons.javascript,
      StackIcons.html,
      StackIcons.css,
      StackIcons.react,
      StackIcons.nodejs,
    ],
  },
];

export const projectProfiles: Array<ProjectProfile | null> = [
  {
    name: "job filter",
    disabled: false,
    description:
      "Web scraper that filters down postings from job boards based on user set parameters",
    demoLink: "http://www.google.com",
    githubLink: "https://github.com/Builderbot2000/job-scraper",
    pictureSrc: "job-boards.png",
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
