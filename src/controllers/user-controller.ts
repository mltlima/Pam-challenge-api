import { Request, Response } from 'express';
import httpStatus from 'http-status';

import authenticationService from '@/services/authentication-service';

export async function signUp(req: Request, res: Response) {
    const { username, password } = req.body;
    await authenticationService.signUp({ username, password });
    res.sendStatus(httpStatus.CREATED);
}

export async function signIn(req: Request, res: Response) {
    const { username, password } = req.body;
    const token = await authenticationService.signIn({ username, password });
    res.status(httpStatus.OK).send({ token });
}