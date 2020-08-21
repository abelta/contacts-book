export default ({ id }) => (
  fetch(`/contact?id=${id}`)
  .then(res => res.json())
);
