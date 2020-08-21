import { rest } from 'msw';
import contact, { contacts } from './contact';

export const handlers = [
  rest.get('/contacts', (req, res, ctx) => {
    const page = Number(req.url.searchParams.get('page') || 0);
    return res(
      ctx.status(200),
      ctx.json(contacts({ page })),
    );
  }),
  rest.get('/contact', (req, res, ctx) => {
    const id = Number(req.url.searchParams.get('id'));
    return res(
      ctx.status(200),
      ctx.json(contact({ id })),
    );
  }),
];
