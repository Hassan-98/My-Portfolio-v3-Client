import { z } from "zod";
//= Utils
import { toaster } from '@/utils/toaster';

interface ValidatorParams<T> {
  data: T;
  schema: z.ZodType;
  useToaster?: boolean;
  setErrorsState?: React.Dispatch<React.SetStateAction<SchemaError[]>>;
}

export interface SchemaError {
  path: string;
  message: string;
}

export function schemaValidator<T>({ data, schema, useToaster = false, setErrorsState }: ValidatorParams<T>) {
  let result = schema.safeParse(data);

  if (!result.success) {
    if (useToaster) result.error.issues.map(err => toaster.error(err.message));
    if (setErrorsState) setErrorsState(result.error.issues.map(err => ({ path: err.path.join('.'), message: err.message })));

    return {
      isInvalid: true,
      errors: result.error.issues.map(err => ({ path: err.path.join('.'), message: err.message })),
    };
  }

  if (setErrorsState) setErrorsState([]);
  return {
    isInvalid: false
  };
}