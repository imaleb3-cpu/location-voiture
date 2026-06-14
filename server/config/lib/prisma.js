import { PrismaClient } from "../../prisma/generated/client/index.js";

const globalForPrisma = global;

const prisma = globalForPrisma.prisma || new PrismaClient({
    log: ['error'],
});

if (process.env.NODE_ENV !== 'production') {
    globalForPrisma.prisma = prisma;
}

export default prisma;