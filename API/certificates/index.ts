import API from "../request.handler";
//= Types
import { ICertificate } from './types';

export async function getAllCertificates({ limit, cvOnly }: { limit?: number; cvOnly?: boolean; }): Promise<ICertificate[] | undefined> {
  let query = `?sort=order`;
  if (limit) query += `&limit=${limit}`;
  if (cvOnly) query += `&showInCv=true`;

  const certificates = await API.GET<ICertificate[]>(`/certificates${query}`);
  if (certificates) return certificates;
}

export async function getCertificateById(id: string): Promise<ICertificate | undefined> {
  const certificate = await API.GET<ICertificate>(`/certificates/${id}`);
  if (certificate) return certificate;
}

export async function addNewCertificate(body: FormData | any) {
  const certificate = await API.POST<ICertificate>(`/certificates`, { body });
  if (certificate) return certificate;
}

export async function updateCertificate(id: string, body: Partial<ICertificate> | FormData) {
  let certificate = await API.PATCH<ICertificate>(`/certificates/${id}`, { body });
  if (certificate) return certificate;
}

export async function updateCertificatesOrder(body: { id: string; order: number }[]) {
  let res = await API.PATCH<null>(`/certificates/order`, { body });
  if (res === null) return true;
}

export async function removeCertificate(id: string) {
  const certificate = await API.DELETE<boolean>(`/certificates/${id}`);
  if (certificate) return certificate;
}