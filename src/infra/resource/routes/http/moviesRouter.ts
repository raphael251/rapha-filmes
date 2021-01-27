import { Router } from 'express';
import { CreateController, ReadController, UpdateController, DeleteController } from '../../../controllers/movies';
const moviesRouter = Router();

moviesRouter.post('/movies', new CreateController().handle);
moviesRouter.get('/movies/:id?', new ReadController().handle);
moviesRouter.patch('/movies/:id?', new UpdateController().handle);
moviesRouter.delete('/movies/:id?', new DeleteController().handle);

export { moviesRouter };