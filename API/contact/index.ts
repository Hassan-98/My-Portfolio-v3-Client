import API from "../request.handler";
//= Types
import { IMessage } from './types';

export async function getAllMessages() {
  let messages = await API.GET<IMessage[]>(`/contact`);
  if (messages) return messages;
}

export async function sendMessage(message: Partial<IMessage>) {
  let res = await API.POST<IMessage>(`/contact`, { body: message });
  if (res) return res;
}

export async function deleteAMessage(id: string) {
  let done = await API.DELETE<boolean>(`/contact/${id}`);
  if (done) return done;
}