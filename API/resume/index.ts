import API from "../request.handler";
//= Types
import { IResumePreferences } from './types';

export async function getResumePreferences() {
  let preferences = await API.GET<IResumePreferences>(`/resume`);
  if (preferences) return preferences;
}

export async function updateResumePreferences(updates: Partial<IResumePreferences>) {
  let preferences = await API.PATCH<IResumePreferences>(`/resume`, { body: updates });
  if (preferences) return preferences;
}