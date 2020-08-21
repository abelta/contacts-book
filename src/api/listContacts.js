export default ({ page = 0 } = {}) => (
  fetch(`/contacts?page=${page}`)
  .then(res => res.json())
);
