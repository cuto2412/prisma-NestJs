import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { PrismaModule } from '../prisma.module'; // import PrismaService
@Module({
  imports: [PrismaModule],  // ← import module chứa PrismaService
  controllers: [CategoryController],
  providers: [CategoryService],
})
export class CategoryModule {}
