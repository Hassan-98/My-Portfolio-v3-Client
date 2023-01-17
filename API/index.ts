import API from "./request.handler";
//= Types
import { MAINDATA } from './types';

export async function fetchMainData() {
  const main_data = await API.GET<MAINDATA>(`/main-data`);

  if (main_data) return main_data;
}