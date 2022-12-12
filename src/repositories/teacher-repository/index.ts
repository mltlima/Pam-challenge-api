import { prisma } from '@/config';

export interface Teacher {
    name: string;
    email: string;
    birthdate: string;
    contact: string;
    userId: number;
}   

async function create(teacher: Teacher) {
    await prisma.teacher.create({ data: teacher });
}

const getTeacherById = async (teacherId: number) => {
    return await prisma.teacher.findUnique({ where: { id: teacherId } });
}

const getTeacherByEmail = async (email: string) => {
    return await prisma.teacher.findFirst({ where: { email } });
}

const getTeacherByUserId = async (userId: number) => {
    return await prisma.teacher.findFirst({ where: { userId } });
}

const updateTeacher = async (teacherId: number, teacher: Teacher) => {
    await prisma.teacher.update({ where: { id: teacherId }, data: teacher });
}

const deleteTeacher = async (teacherId: number) => {
    await prisma.teacher.delete({ where: { id: teacherId } });
}

const teacherRepository = {
    create,
    getTeacherById,
    getTeacherByEmail,
    getTeacherByUserId,
    updateTeacher,
    deleteTeacher,
};

export default teacherRepository;