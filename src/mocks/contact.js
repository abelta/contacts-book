import faker from 'faker';

const contact = ({ id } = {}) => ({
  id: id || faker.random.number(),
  name: faker.fake("{{name.firstName}} {{name.lastName}}"),
  country: {
    name: faker.address.country(),
    code: faker.address.countryCode(),
  },
  city: faker.address.city(),
  phone: faker.phone.phoneNumber(),
  email: faker.internet.email(),
  avatar: faker.image.avatar(),
});

const contacts = ({ page }) => ({
  page,
  contacts: Array.from(Array(20), () => contact()),
});

export default contact;
export { contacts };
