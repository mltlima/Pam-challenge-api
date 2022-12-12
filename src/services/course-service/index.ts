import courseRepository, { Course } from "@/repositories/course-repository";

import { conflictError, invalidDataError, notFoundError } from "@/errors";

async function createCourse(course: Course) {
    const existingCourse = await courseRepository.getCourseByClassroomId(course.classroomId);
    if (existingCourse) throw conflictError('Course already exists');

    await courseRepository.createCourse(course);
}

async function getCourseById(courseId: number) {
    const course = await courseRepository.getCourseById(courseId);
    if (!course) throw notFoundError();

    return course;
}

async function updateCourse(courseId: number, course: Course) {
    const existingCourse = await courseRepository.getCourseById(courseId);
    if (!existingCourse) throw notFoundError();

    await courseRepository.updateCourse(courseId, course);
}

async function deleteCourse(courseId: number) {
    const existingCourse = await courseRepository.getCourseById(courseId);
    if (!existingCourse) throw notFoundError();

    await courseRepository.deleteCourse(courseId);
}

async function getAllCourses() {
    return await courseRepository.getAllCourses();
}

const courseService = {
    createCourse,
    getCourseById,
    updateCourse,
    deleteCourse,
    getAllCourses,
};

export default courseService;