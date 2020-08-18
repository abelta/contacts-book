import { rest } from 'msw';

export const handlers = [
  rest.get('/contacts', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({ page: 0, contacts: [], }),
    );
  }),
];
