import { Request, Response } from 'express';
import httpStatus from 'http-status';

import examService from '@/services/exam-service';

export async function createExam(req: Request, res: Response) {
    const { name, description, date } = req.body;
    await examService.createExam({name, description, date});
    res.sendStatus(httpStatus.CREATED);
}

export async function getExamById(req: Request, res: Response) {
    const { examId } = req.params;
    const exam = await examService.getExamById(Number(examId));
    res.status(httpStatus.OK).send(exam);
}

export async function updateExam(req: Request, res: Response) {
    const { examId } = req.params;
    const { name, description, date } = req.body;
    await examService.updateExam(Number(examId), {name, description, date});
    res.sendStatus(httpStatus.NO_CONTENT);
}

export async function deleteExam(req: Request, res: Response) {
    const { examId } = req.params;
    await examService.deleteExam(Number(examId));
    res.sendStatus(httpStatus.NO_CONTENT);
}

export async function getAllExams(req: Request, res: Response) {
    const exams = await examService.getAllExams();
    res.status(httpStatus.OK).send(exams);
}

export async function createExamResult(req: Request, res: Response) {
    const { examId, studentId, score } = req.body;
    await examService.createExamResult({examId, studentId, score});
    res.sendStatus(httpStatus.CREATED);
}