import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // làm module này global, các module khác tự động thấy PrismaService
@Module({
  providers: [PrismaService], // cung cấp PrismaService
  exports: [PrismaService],   // export để module khác dùng được
})
export class PrismaModule {}
