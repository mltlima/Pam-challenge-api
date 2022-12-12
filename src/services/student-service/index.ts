import studentRepository, { Student } from "@/repositories/student-reposirory";

import { invalidCredentialsError } from './errors';
import { conflictError, invalidDataError, notFoundError } from "@/errors";

async function createStudent(student: Student) {
    const existingStudent = await studentRepository.getStudentByEmail(student.email);
    if (existingStudent) throw conflictError('Student already exists');

    await studentRepository.create(student);
}

async function getStudentById(studentId: number) {
    const student = await studentRepository.getStudentById(studentId);
    if (!student) throw notFoundError();

    return student;
}

async function updateStudent(studentId: number, student: Student) {
    const existingStudent = await studentRepository.getStudentById(studentId);
    if (!existingStudent) throw notFoundError();

    await studentRepository.updateStudent(studentId, student);
}

async function deleteStudent(studentId: number) {
    const existingStudent = await studentRepository.getStudentById(studentId);
    if (!existingStudent) throw notFoundError();

    await studentRepository.deleteStudent(studentId);
}

const studentService = {
    createStudent,
    getStudentById,
    updateStudent,
    deleteStudent,
};

export default studentService;