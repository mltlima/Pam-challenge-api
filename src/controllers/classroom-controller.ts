import { Request, Response } from 'express';
import httpStatus from 'http-status';

import classroomService from '@/services/classroom-service';

export async function createClassroom(req: Request, res: Response) {
    const { teacherId } = req.body;
    await classroomService.createClassroom(teacherId);
    res.sendStatus(httpStatus.CREATED);
}

export async function getClassroomById(req: Request, res: Response) {
    const { classroomId } = req.params;
    const classroom = await classroomService.getClassroomById(Number(classroomId));
    res.status(httpStatus.OK).send(classroom);
}

export async function updateClassroom(req: Request, res: Response) {
    const { classroomId } = req.params;
    const { teacherId, status } = req.body;
    await classroomService.updateClassroom(Number(classroomId), teacherId, status);
    res.sendStatus(httpStatus.NO_CONTENT);
}

export async function deleteClassroom(req: Request, res: Response) {
    const { classroomId } = req.params;
    await classroomService.deleteClassroom(Number(classroomId));
    res.sendStatus(httpStatus.NO_CONTENT);
}

export async function getAllClassrooms(req: Request, res: Response) {
    const classrooms = await classroomService.getAllClassrooms();
    res.status(httpStatus.OK).send(classrooms);
}