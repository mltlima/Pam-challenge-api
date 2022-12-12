import { prisma } from '@/config';

export interface User {
    username: string;
    password: string;
}

async function create(user: User) {
    await prisma.user.create({ data: user });
}

const getUserById = async (userId: number) => {
  return await prisma.user.findUnique({ where: { id: userId } });
};

const getUserByUsername = async (username: string) => {
    return await prisma.user.findFirst({ where: { username
    } });
};

const userRepository = {
    create,
    getUserById,
    getUserByUsername,
};

export default userRepository;