import { PrismaClient } from '@prisma/client'
import 'dotenv/config';
const globalForPrisma = globalThis as unknown as { prisma: PrismaClient }

export const prisma =
  globalForPrisma.prisma || new PrismaClient({  // new PrismaClient() không cần phải tạo mới đối tượng trong mỗi hàm trong service nữa
    log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
  })   

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
