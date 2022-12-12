import { Router } from 'express';

import schemas from '@/schemas';
import { validateBody } from '@/middlewares';
import * as userController from '@/controllers/user-controller';

const usersRouter = Router();

usersRouter.post('/signup', validateBody(schemas.userSchema), userController.signUp);
usersRouter.post('/signin', validateBody(schemas.userSchema), userController.signIn);

export { usersRouter };