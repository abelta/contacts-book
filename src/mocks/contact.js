import faker from 'faker';

const contact = ({ id } = {}) => ({
  id: id === undefined ? faker.random.number() : id,
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
  contacts: Array.from([...Array(20).keys()], elem => contact({ id: page * 20 + elem })),
});

export default contact;
export { contacts };
