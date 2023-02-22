import { Stack, StackType } from "../stack/types";

export enum SkillMastery {
  Proficient = "Proficient",
  Moderate = "Moderate"
}

export interface ISkill {
  _id: string;
  skill: Stack;
  mastery: SkillMastery;
  type: StackType;
  order: number;
}

export interface IUpdateSkill {
  skill: string;
  mastery: SkillMastery;
  type: StackType;
  order: number;
}

export type ExtendedSkill = ISkill & {
  selected?: boolean;
}