export default async ({ page = 0 } = {}) => {
  const data = await fetch(`/contacts?page=${page}`);
  return { data: data.json() };
};
