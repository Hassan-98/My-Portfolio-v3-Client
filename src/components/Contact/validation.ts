import { z } from 'zod';

export const schema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string().min(10)
});