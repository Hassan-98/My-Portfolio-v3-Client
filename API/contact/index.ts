import API from "../request.handler";
//= Types
import { IMessage } from './types';

export async function getAllMessages() {
  let messages = await API.GET<IMessage[]>(`/contact`);
  if (messages) return messages;
}

export async function deleteAMessage(id: string) {
  let done = await API.DELETE<boolean>(`/contact/${id}`);
  if (done) return done;
}