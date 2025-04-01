import config from "@/lib/config";
import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma || new PrismaClient();

if (config.nodeEnv !== "production") globalForPrisma.prisma = prisma;
