import Joi from 'joi';

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

const schemas = {
    userSchema,
    teacherSchema,
    studentSchema,
};

export default schemas;