import API from "../request.handler";
//= Types
import { IExperience } from './types';

export async function getAllExperiences({ limit, cvOnly }: { limit?: number; cvOnly?: boolean; }): Promise<IExperience[] | undefined> {
  let query = `?sort=order`;
  if (limit) query += `&limit=${limit}`;
  if (cvOnly) query += `&showInCv=true`;

  const experience = await API.GET<IExperience[]>(`/experience${query}`);
  if (experience) return experience;
}

export async function getExperienceById(id: string): Promise<IExperience | undefined> {
  const experience = await API.GET<IExperience>(`/experience/${id}`);
  if (experience) return experience;
}

export async function addNewExperience(body: any) {
  const experience = await API.POST<IExperience>(`/experience`, { body });
  if (experience) return experience;
}

export async function updateExperience(id: string, body: Partial<IExperience> | FormData) {
  let experience = await API.PATCH<IExperience>(`/experience/${id}`, { body });
  if (experience) return experience;
}

export async function removeExperience(id: string) {
  const experience = await API.DELETE<boolean>(`/experience/${id}`);
  if (experience) return experience;
}