import Joi from 'joi';
import { Status } from '@prisma/client';

const userSchema = Joi.object().keys({
    username: Joi.string().min(3).required(),
    password: Joi.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/).required(),
});

const teacherSchema = Joi.object().keys({
    name: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    birthdate: Joi.date().required(),
    contact: Joi.string().min(5).required(),
    userId: Joi.number().required(),
});

const studentSchema = Joi.object().keys({
    name: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    birthdate: Joi.date().required(),
    contact: Joi.string().min(5).required(),
});

const classroomSchema = Joi.object().keys({
    teacherId: Joi.number().required(),
    status: Joi.string().valid(Status.ACTIVE, Status.INACTIVE).allow(null),
});

const schemas = {
    userSchema,
    teacherSchema,
    studentSchema,
    classroomSchema,
};

export default schemas;