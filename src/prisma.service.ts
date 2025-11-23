
import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    super();// Prisma tự dùng PostgreSQL nếu schema.prisma đã set provider=postgresql
  }
  async OnModuleInit(){
    await this.$connect(); // Kết nối DB khi module init
  }
  async onModuleDestroy() {
    await this.$disconnect(); // Đóng kết nối khi module destroy
  }
}
