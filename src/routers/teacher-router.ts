import { Router } from 'express';

import schemas from '@/schemas';
import { validateBody, authenticateToken } from '@/middlewares';
import * as teacherController from '@/controllers/teacher-controller';

const teachersRouter = Router();

teachersRouter.use(authenticateToken);
teachersRouter.post('/', validateBody(schemas.teacherSchema), teacherController.createTeacher);
teachersRouter.get('/:teacherId', teacherController.getTeacherById);
teachersRouter.get('/user/:userId', teacherController.getTeacherByUserId);
teachersRouter.put('/:teacherId', validateBody(schemas.teacherSchema), teacherController.updateTeacher);
teachersRouter.delete('/:teacherId', teacherController.deleteTeacher);

export { teachersRouter };