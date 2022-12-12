import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'

import userRepository, { User } from '@/repositories/user-repository';
import { invalidCredentialsError } from './errors';
import { conflictError } from "@/errors";

async function signUp(user: User) {
    const passwordHash = bcrypt.hashSync(user.password, 10);

    const existingUser = await userRepository.getUserByUsername(user.username);
    if (existingUser) throw conflictError('Username already exists');

    user.password = passwordHash;

    await userRepository.create(user);
}

async function signIn(user: User) {
    const existingUser = await userRepository.getUserByUsername(user.username);
    if (!existingUser) throw invalidCredentialsError();

    const isValid = bcrypt.compare(existingUser.password, user.password);
    if (!isValid) throw invalidCredentialsError();

    delete existingUser.password;
    const token = jwt.sign({ user: existingUser }, process.env.JWT_SECRET, {
        expiresIn: '24h',
    });

    return token;
}

const authenticationService = {
    signIn,
    signUp,
};

export default authenticationService;