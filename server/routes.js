import { cardRouter } from './routers/cards.router';

export const configRoutes = (app) => {
  app.use('/api', cardRouter)
};
