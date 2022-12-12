import { Router } from 'express';

import schemas from '@/schemas';
import { validateBody, authenticateToken } from '@/middlewares';
import * as courseController from '@/controllers/course-controller';

const courseRouter = Router();

courseRouter.use(authenticateToken);
courseRouter.post('/', validateBody(schemas.courseSchema), courseController.createCourse);
courseRouter.get('/:courseId', courseController.getCourseById);
courseRouter.put('/:courseId', validateBody(schemas.courseSchema), courseController.updateCourse);
courseRouter.delete('/:courseId', courseController.deleteCourse);
courseRouter.get('/', courseController.getAllCourses);

export { courseRouter };