import API from "../request.handler";
//= Types
import { IWork, Importance } from 'types';

export async function getAllWorks({ limit, type, withStack, cvOnly }: { limit?: number, type?: Importance, withStack?: boolean; cvOnly?: boolean; }): Promise<IWork[] | undefined> {
  let query = `?sort=order`;
  if (limit) query += `&limit=${limit}`;
  if (type) query += `&importance=${type}`;
  if (withStack) query += `&populate=stack.stack`;
  if (cvOnly) query += `&showInCv=true`;

  const works = await API.GET<IWork[]>(`/works${query}`);
  if (works) return works;
}

export async function getWorkById(id: string): Promise<IWork | undefined> {
  const work = await API.GET<IWork>(`/works/${id}`);
  if (work) return work;
}

export async function addNewWork(body: FormData | any) {
  const work = await API.POST<IWork>(`/works`, { body });
  if (work) return work;
}

export async function updateWork(id: string, body: Partial<IWork> | FormData) {
  let work = await API.PATCH<IWork>(`/works/${id}`, { body });
  if (work) return work;
}

export async function updateWorksOrder(body: { id: string; order: number }[]) {
  let res = await API.PATCH<null>(`/works/order`, { body });
  if (res === null) return true;
}

export async function removeWork(id: string) {
  const work = await API.DELETE<boolean>(`/works/${id}`);
  if (work) return work;
}