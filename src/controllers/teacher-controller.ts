import { Request, Response } from 'express';
import httpStatus from 'http-status';

import teacherService from '@/services/teacher-service';

export async function createTeacher(req: Request, res: Response) {
    const { name, email, birthdate, contact, userId } = req.body;
    await teacherService.createTeacher({ name, email, birthdate, contact, userId });
    res.sendStatus(httpStatus.CREATED);
}

export async function getTeacherById(req: Request, res: Response) {
    const { teacherId } = req.params;
    const teacher = await teacherService.getTeacherById(Number(teacherId));
    res.status(httpStatus.OK).send(teacher);
}

export async function getTeacherByUserId(req: Request, res: Response) {
    const { userId } = req.params;
    const teacher = await teacherService.getTeacherByUserId(Number(userId));
    res.status(httpStatus.OK).send(teacher);
}

export async function updateTeacher(req: Request, res: Response) {
    const { teacherId } = req.params;
    const { name, email, birthdate, contact, userId } = req.body;
    await teacherService.updateTeacher(Number(teacherId), { name, email, birthdate, contact, userId });
    res.sendStatus(httpStatus.NO_CONTENT);
}

export async function deleteTeacher(req: Request, res: Response) {
    const { teacherId } = req.params;
    await teacherService.deleteTeacher(Number(teacherId));
    res.sendStatus(httpStatus.NO_CONTENT);
}