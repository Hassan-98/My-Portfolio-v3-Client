import API from "../request.handler";
//= Types
import { ISkill, IUpdateSkill } from 'types';

export async function getAllSkills(): Promise<ISkill[] | undefined> {
  const skills = await API.GET<ISkill[]>(`/skills?sort=order&populate=skill`);
  if (skills) return skills;
}

export async function getSkillById(id: string): Promise<ISkill | undefined> {
  const skill = await API.GET<ISkill>(`/skills/${id}?populate=skill`);
  if (skill) return skill;
}

export async function addNewSkill(body: ISkill) {
  const skill = await API.POST<ISkill>(`/skills`, { body });
  if (skill) return skill;
}

export async function updateSkillByType(type: string, skills: IUpdateSkill[]) {
  let res = await API.PATCH<ISkill>(`/skills/type`, {
    body: {
      skills,
      type
    }
  });
  if (res === null) return true;
}

export async function updateSkill(id: string, body: Partial<ISkill> | FormData) {
  let skill = await API.PATCH<ISkill>(`/skills/${id}`, { body });
  if (skill) return skill;
}

export async function updateSkillsOrder(body: { id: string; order: number }[]) {
  let res = await API.PATCH<null>(`/skills/order`, { body });
  if (res === null) return true;
}

export async function removeSkill(id: string) {
  const skill = await API.DELETE<boolean>(`/skills/${id}`);
  if (skill) return skill;
}