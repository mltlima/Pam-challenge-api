import Joi from 'joi';

const userSchema = Joi.object().keys({
    username: Joi.string().min(3).required(),
    password: Joi.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/).required(),
});

const schemas = {
    userSchema,
};

export default schemas;