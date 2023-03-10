import API from "../request.handler";
//= Types
import { IExperience } from './types';

export async function getAllExperiences({ limit, cvOnly }: { limit?: number; cvOnly?: boolean; }): Promise<IExperience[] | undefined> {
  let query = `?sort=-endedAt`;
  if (limit) query += `&limit=${limit}`;
  if (cvOnly) query += `&showInCv=true`;

  const experience = await API.GET<IExperience[]>(`/experience${query}`);
  if (experience) {
    return experience.sort((a, b) => {
      if (a.endedAt && b.endedAt) return new Date(b.endedAt).getTime() - new Date(a.endedAt).getTime();
      else if (a.endedAt && !b.endedAt) return new Date(a.endedAt).getTime();
      else if (!a.endedAt && b.endedAt) return - new Date(b.endedAt).getTime();
      else return new Date(a.startedAt).getTime() - new Date(b.startedAt).getTime();
    });
  }
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