export default function convertToFormData<T extends Record<string, any>>(payload: T, filesKeys?: string[]) {
  const formdata = new FormData();
  Object.entries(payload).forEach(([key, value]) => {
    if (filesKeys?.includes(key)) {
      formdata.append(key, value as string | Blob);
    } else {
      if (key.includes('[]')) {
        value.split(',').forEach((item: string) => {
          formdata.append(key, item);
        })
      } else formdata.set(key, value as string);
    }
  });
  return formdata;
}