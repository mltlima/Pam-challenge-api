import classroomRepository from "@/repositories/classroom-repository";
import { Status } from '@prisma/client';

import { conflictError, invalidDataError, notFoundError } from "@/errors";

async function createClassroom(teacherId: number) {
    const existingClassroom = await classroomRepository.getClassroomByTeacherId(teacherId);
    if (existingClassroom) throw conflictError('Classroom already exists');

    await classroomRepository.create(teacherId);
}

async function getClassroomById(classroomId: number) {
    const classroom = await classroomRepository.getClassroomById(classroomId);
    if (!classroom) throw notFoundError();

    return classroom;
}

async function updateClassroom(classroomId: number, teacherId: number, status: Status) {
    const existingClassroom = await classroomRepository.getClassroomById(classroomId);
    if (!existingClassroom) throw notFoundError();

    await classroomRepository.updateClassroom(classroomId, teacherId, status);
}

async function deleteClassroom(classroomId: number) {
    const existingClassroom = await classroomRepository.getClassroomById(classroomId);
    if (!existingClassroom) throw notFoundError();

    await classroomRepository.deleteClassroom(classroomId);
}

async function getAllClassrooms() {
    return await classroomRepository.getAllClassrooms();
}

const classroomService = {
    createClassroom,
    getClassroomById,
    updateClassroom,
    deleteClassroom,
    getAllClassrooms,
};

export default classroomService;