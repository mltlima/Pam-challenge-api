import 'reflect-metadata';
import 'express-async-errors';
import express, { Express } from 'express';
import cors from 'cors';

import { loadEnv, connectDb, disconnectDB } from '@/config';

loadEnv();

import { handleApplicationErrors } from '@/middlewares';
import { usersRouter, teachersRouter, studenRouter, classroomRouter, courseRouter, examRouter } from '@/routers';

const app = express();
app
  .use(cors())
  .use(express.json())
  .get('/', (_req, res) => res.send('OK!'))
  .use(usersRouter)
  .use('/teacher', teachersRouter)
  .use('/student', studenRouter)
  .use('/classroom', classroomRouter)
  .use('/course', courseRouter)
  .use('/exam', examRouter)
  .use(handleApplicationErrors);

export function init(): Promise<Express> {
  connectDb();
  return Promise.resolve(app);
}

export async function close(): Promise<void> {
  await disconnectDB();
}

export default app;