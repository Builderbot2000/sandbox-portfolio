export interface TechStack {
  name: string;
  iconSrc: string;
}

export interface MemberProfile {
  name: string;
  entryPath: string;
  avatarSrc: string;
  position: string;
  quote: string;
  email: string;
  stack: Array<TechStack>;
}

export interface ProjectProfile {
  name?: string;
  disabled?: boolean;
  pictureSrc?: string;
  description?: string;
  githubLink?: string;
  demoLink?: string;
  stackUsed?: Array<TechStack>;
  blank?: boolean;
}

export type GadgetProps = ProjectProfile & {
  threshold: number;
};
