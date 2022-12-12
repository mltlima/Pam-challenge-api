import { prisma } from '@/config';

import { Status } from '@prisma/client';

async function create(teacherId: number) {
    await prisma.classroom.create({ data: { teacherId } });
}

const getClassroomById = async (classroomId: number) => {
    return await prisma.classroom.findUnique({ where: { id: classroomId } });
}

const getClassroomByTeacherId = async (teacherId: number) => {
    return await prisma.classroom.findFirst({ where: { teacherId } });
}

const updateClassroom = async (classroomId: number, teacherId: number, status: Status) => {
    await prisma.classroom.update({ where: { id: classroomId }, data: { teacherId, status } });
}

const deleteClassroom = async (classroomId: number) => {
    await prisma.classroom.delete({ where: { id: classroomId } });
}

const getAllClassrooms = async () => {
    return await prisma.classroom.findMany();
}

const classroomRepository = {
    create,
    getClassroomById,
    getClassroomByTeacherId,
    updateClassroom,
    deleteClassroom,
    getAllClassrooms,
};

export default classroomRepository;