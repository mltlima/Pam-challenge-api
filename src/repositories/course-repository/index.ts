import { prisma } from '@/config';

export interface Course {
    name: string;
    description: string;
    classroomId: number;
}

async function createCourse(course: Course) {
    await prisma.course.create({ data: course });
}

const getCourseById = async (courseId: number) => {
    return await prisma.course.findUnique({ where: { id: courseId } });
}

const getCourseByClassroomId = async (classroomId: number) => {
    return await prisma.course.findFirst({ where: { classroomId } });
}

const updateCourse = async (courseId: number, course: Course) => {
    await prisma.course.update({ where: { id: courseId }, data: course });
}

const deleteCourse = async (courseId: number) => {
    await prisma.course.delete({ where: { id: courseId } });
}

const getAllCourses = async () => {
    return await prisma.course.findMany();
}

const courseRepository = {
    createCourse,
    getCourseById,
    getCourseByClassroomId,
    updateCourse,
    deleteCourse,
    getAllCourses,
};

export default courseRepository;