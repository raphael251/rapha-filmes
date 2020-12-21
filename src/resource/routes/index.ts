import { Router } from 'express';
import { moviesRouter } from './http/moviesRouter';
const mainRouter = Router();

mainRouter.get('/', (_, res) => res.send({ working: true }));
mainRouter.use(moviesRouter);

export { mainRouter };