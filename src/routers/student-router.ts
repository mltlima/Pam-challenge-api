import { Router } from 'express';

import schemas from '@/schemas';
import { validateBody, authenticateToken } from '@/middlewares';
import * as teacherController from '@/controllers/teacher-controller';

const studenRouter = Router();

studenRouter.use(authenticateToken);
studenRouter.post('/', validateBody(schemas.studentSchema), teacherController.createTeacher);
studenRouter.get('/:teacherId', teacherController.getTeacherById);
studenRouter.get('/user/:userId', teacherController.getTeacherByUserId);
studenRouter.put('/:teacherId', validateBody(schemas.studentSchema), teacherController.updateTeacher);
studenRouter.delete('/:teacherId', teacherController.deleteTeacher);

export { studenRouter };