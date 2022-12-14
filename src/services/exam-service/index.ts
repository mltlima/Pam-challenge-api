import examRepository, { Exam, ExamResult } from "@/repositories/exam-repository";
import studentRepository from "@/repositories/student-repository";
import { conflictError, invalidDataError, notFoundError } from "@/errors";

async function createExam(exam: Exam) {
    await examRepository.createExam(exam);
}

async function getExamById(examId: number) {
    const exam = await examRepository.getExamById(examId);
    if (!exam) throw notFoundError();

    return exam;
}

async function updateExam(examId: number, exam: Exam) {
    const existingExam = await examRepository.getExamById(examId);
    if (!existingExam) throw notFoundError();

    await examRepository.updateExam(examId, exam);
}

async function deleteExam(examId: number) {
    const existingExam = await examRepository.getExamById(examId);
    if (!existingExam) throw notFoundError();

    await examRepository.deleteExam(examId);
}

async function getAllExams() {
    return await examRepository.getAllExams();
}

async function createExamResult(examResult: ExamResult) {
    const existingExam = await examRepository.getExamById(examResult.examId);
    if (!existingExam) throw notFoundError();

    const existingStudent = await studentRepository.getStudentById(examResult.studentId);
    if (!existingStudent) throw notFoundError();

    await examRepository.createExamResult(examResult);
}

const examService = {
    createExam,
    getExamById,
    updateExam,
    deleteExam,
    getAllExams,
    createExamResult,
};

export default examService;