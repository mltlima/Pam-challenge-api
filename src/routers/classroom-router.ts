import { Router } from 'express';

import schemas from '@/schemas';
import { validateBody, authenticateToken } from '@/middlewares';
import * as classroomController from '@/controllers/classroom-controller';

const classroomRouter = Router();

classroomRouter.use(authenticateToken);
classroomRouter.post('/', validateBody(schemas.classroomSchema), classroomController.createClassroom);
classroomRouter.get('/:classroomId', classroomController.getClassroomById);
classroomRouter.put('/:classroomId', validateBody(schemas.classroomSchema), classroomController.updateClassroom);
classroomRouter.delete('/:classroomId', classroomController.deleteClassroom);
classroomRouter.get('/', classroomController.getAllClassrooms);
classroomRouter.post('/student', validateBody(schemas.classroomStudentSchema), classroomController.createClassroomStudent);

export { classroomRouter };