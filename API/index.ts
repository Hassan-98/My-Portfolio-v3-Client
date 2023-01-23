import API from "./request.handler";
//= Types
// import { MAINDATA } from './types';

// export async function fetchMainData() {
//   const main_data = await API.Get<MAINDATA>(`/main-data`);

//   if (main_data) return main_data;
// }

export async function downloadResume() {
  await API.Post<Buffer>(`/generate-cv`, {
    config: {
      responseType: 'arraybuffer',
      headers: {
        'Accept': 'application/pdf'
      }
    }
  });
}