import { Request, Response } from 'express';
import httpStatus from 'http-status';

import studentService from '@/services/student-service';

export async function createStudent(req: Request, res: Response) {
    const { name, email, birthdate, contact, userId } = req.body;
    await studentService.createStudent({ name, email, birthdate, contact });
    res.sendStatus(httpStatus.CREATED);
}

export async function getStudentById(req: Request, res: Response) {
    const { studentId } = req.params;
    const student = await studentService.getStudentById(Number(studentId));
    res.status(httpStatus.OK).send(student);
}

export async function updateStudent(req: Request, res: Response) {
    const { studentId } = req.params;
    const { name, email, birthdate, contact, userId } = req.body;
    await studentService.updateStudent(Number(studentId), { name, email, birthdate, contact });
    res.sendStatus(httpStatus.NO_CONTENT);
}

export async function deleteStudent(req: Request, res: Response) {
    const { studentId } = req.params;
    await studentService.deleteStudent(Number(studentId));
    res.sendStatus(httpStatus.NO_CONTENT);
}