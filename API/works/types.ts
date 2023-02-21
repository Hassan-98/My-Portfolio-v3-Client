import { Stack, StackType } from "types";

export enum Importance {
  Glowing = "glowing",
  Legacy = "legacy"
}

export interface IWork {
  _id?: string;
  name: string;
  description: string;
  stackType: StackType;
  importance: Importance;
  showInCv: boolean;
  links: {
    github?: string;
    demo?: string;
    apiRepo?: string;
    apiDocs?: string;
  };
  images: {
    desktop: string;
    mobile: string;
  };
  stack: { stack: Stack; order: number; _id?: string }[];
  order: number;
}