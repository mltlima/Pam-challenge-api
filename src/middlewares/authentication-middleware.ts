import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import * as jwt from 'jsonwebtoken';

import { unauthorizedError } from '@/errors';

export async function authenticateToken(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;
    const token = authorization?.replace("Bearer ", "").trim();
    const secretKey = process.env.JWT_SECRET;

    if (!token) return generateUnauthorizedResponse(res);

    const user = jwt.verify(token, secretKey!);
    if (!user) return generateUnauthorizedResponse(res);

    res.locals.user = user;
    next();
}

function generateUnauthorizedResponse(res: Response) {
  res.status(httpStatus.UNAUTHORIZED).send(unauthorizedError());
}