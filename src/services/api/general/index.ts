import API from "../request.handler";
//= Types
import { GeneralSettings } from './types';

export async function getGeneralSettings() {
  const settings = await API.GET<GeneralSettings>(`/general`);
  if (settings) return settings;
}

export async function updateGeneralSettings(body: FormData | any) {
  const settings = await API.PATCH<GeneralSettings>(`/general`, { body });
  if (settings) return settings;
}