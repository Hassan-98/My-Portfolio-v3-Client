export async function asyncHandler<T>(func: () => Promise<T>) {
  try {
    const res: T = await func();
    return res;
  } catch (err) {
    console.log(err);
  }
}