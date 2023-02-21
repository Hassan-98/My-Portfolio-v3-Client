import API from "../request.handler";
//= Types
import { Stack } from './types';

export async function getAllStacks() {
  const stacks = await API.GET<Stack[]>(`/stack?sort=name`);
  if (stacks) return stacks;
}