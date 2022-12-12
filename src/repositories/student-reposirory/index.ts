import { prisma } from '@/config';

export interface Student {
    name: string;
    email: string;
    birthdate: string;
    contact: string;
}

async function create(student: Student) {
    await prisma.student.create({ data: student });
}

const getStudentById = async (studentId: number) => {
    return await prisma.student.findUnique({ where: { id: studentId } });
}

const getStudentByEmail = async (email: string) => {
    return await prisma.student.findFirst({ where: { email } });
}

const updateStudent = async (studentId: number, student: Student) => {
    await prisma.student.update({ where: { id: studentId }, data: student });
}

const deleteStudent = async (studentId: number) => {
    await prisma.student.delete({ where: { id: studentId } });
}

const studentRepository = {
    create,
    getStudentById,
    getStudentByEmail,
    updateStudent,
    deleteStudent,
};

export default studentRepository;