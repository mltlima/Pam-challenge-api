import { Router } from 'express';

import schemas from '@/schemas';
import { validateBody, authenticateToken } from '@/middlewares';
import * as examController from '@/controllers/exam-controller';

const examRouter = Router();

examRouter.use(authenticateToken);
examRouter.post('/', validateBody(schemas.examSchema), examController.createExam);
examRouter.get('/:examId', examController.getExamById);
examRouter.put('/:examId', validateBody(schemas.examSchema), examController.updateExam);
examRouter.delete('/:examId', examController.deleteExam);
examRouter.get('/', examController.getAllExams);

export { examRouter };