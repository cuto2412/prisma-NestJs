import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('PrismaClient initialized!');
}

main().finally(() => prisma.$disconnect());