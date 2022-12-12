import { Request, Response } from 'express';
import httpStatus from 'http-status';

import courseService from '@/services/course-service';

export async function createCourse(req: Request, res: Response) {
    const { classroomId } = req.body;
    await courseService.createCourse(classroomId);
    res.sendStatus(httpStatus.CREATED);
}

export async function getCourseById(req: Request, res: Response) {
    const { courseId } = req.params;
    const course = await courseService.getCourseById(Number(courseId));
    res.status(httpStatus.OK).send(course);
}

export async function updateCourse(req: Request, res: Response) {
    const { courseId } = req.params;
    const { classroomId } = req.body;
    await courseService.updateCourse(Number(courseId), classroomId);
    res.sendStatus(httpStatus.NO_CONTENT);
}

export async function deleteCourse(req: Request, res: Response) {
    const { courseId } = req.params;
    await courseService.deleteCourse(Number(courseId));
    res.sendStatus(httpStatus.NO_CONTENT);
}

export async function getAllCourses(req: Request, res: Response) {
    const courses = await courseService.getAllCourses();
    res.status(httpStatus.OK).send(courses);
}