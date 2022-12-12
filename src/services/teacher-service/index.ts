import teacherRepository, { Teacher } from "@/repositories/teacher-repository";

import { invalidCredentialsError } from './errors';
import { conflictError, invalidDataError, notFoundError } from "@/errors";

async function createTeacher(teacher: Teacher) {
    const existingTeacher = await teacherRepository.getTeacherByEmail(teacher.email);
    if (existingTeacher) throw conflictError('Teacher already exists');

    await teacherRepository.create(teacher);
}

async function getTeacherById(teacherId: number) {
    const teacher = await teacherRepository.getTeacherById(teacherId);
    if (!teacher) throw notFoundError();

    return teacher;
}

async function getTeacherByUserId(userId: number) {
    const teacher = await teacherRepository.getTeacherByUserId(userId);
    if (!teacher) throw notFoundError();

    return teacher;
}

async function updateTeacher(teacherId: number, teacher: Teacher) {
    const existingTeacher = await teacherRepository.getTeacherById(teacherId);
    if (!existingTeacher) throw notFoundError();

    await teacherRepository.updateTeacher(teacherId, teacher);
}

async function deleteTeacher(teacherId: number) {
    const existingTeacher = await teacherRepository.getTeacherById(teacherId);
    if (!existingTeacher) throw notFoundError();

    await teacherRepository.deleteTeacher(teacherId);
}

const teacherService = {
    createTeacher,
    getTeacherById,
    getTeacherByUserId,
    updateTeacher,
    deleteTeacher,
};

export default teacherService;