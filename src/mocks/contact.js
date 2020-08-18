import faker from 'faker';

const contact = () => ({
  id: faker.random.number(),
  name: faker.fake("{{name.firstName}} {{name.lastName}}"),
});

const contacts = ({ page }) => ({
  page,
  contacts: Array.from(Array(20), () => contact()),
});

export default contact;
export { contacts };
