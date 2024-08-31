import API from "../request.handler";
//= Types
import { ITestimonial } from './types';

export async function getAllTestimonials(): Promise<ITestimonial[] | undefined> {
  const testimonial = await API.GET<ITestimonial[]>(`/testimonials`);
  if (testimonial) return testimonial;
}

export async function getTestimonialById(id: string): Promise<ITestimonial | undefined> {
  const testimonial = await API.GET<ITestimonial>(`/testimonials/${id}`);
  if (testimonial) return testimonial;
}

export async function addNewTestimonial(body: any) {
  const testimonial = await API.POST<ITestimonial>(`/testimonials`, { body });
  if (testimonial) return testimonial;
}

export async function updateTestimonial(id: string, body: Partial<ITestimonial> | FormData) {
  let testimonial = await API.PATCH<ITestimonial>(`/testimonials/${id}`, { body });
  if (testimonial) return testimonial;
}

export async function removeTestimonial(id: string) {
  const testimonial = await API.DELETE<boolean>(`/testimonials/${id}`);
  if (testimonial) return testimonial;
}