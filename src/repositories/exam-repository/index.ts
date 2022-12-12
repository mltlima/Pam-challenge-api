import { prisma } from '@/config';

export interface Exam {
    name: string;
    description: string;
    date: string;
}

async function createExam(exam: Exam) {
    await prisma.exam.create({ data: exam });
}

const getExamById = async (examId: number) => {
    return await prisma.exam.findUnique({ where: { id: examId } });
}

const updateExam = async (examId: number, exam: Exam) => {
    await prisma.exam.update({ where: { id: examId }, data: exam });
}

const deleteExam = async (examId: number) => {
    await prisma.exam.delete({ where: { id: examId } });
}

const getAllExams = async () => {
    return await prisma.exam.findMany();
}

const examRepository = {
    createExam,
    getExamById,
    updateExam,
    deleteExam,
    getAllExams,
};

export default examRepository;