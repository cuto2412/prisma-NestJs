import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Prisma, PrismaClient } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}
  // const prisma = new PrismaClient();
  async create(createCategoryDto: CreateCategoryDto) {
    // map DTO sang Prisma input
    const data: Prisma.CategoryCreateInput = {
      name: createCategoryDto.name,
      // createdAt tự động có default
    };

    return await this.prisma.category.create({ data });
  }

  async findAll() {
    // return `This action returns all category`;
    return await this.prisma.category.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.category.findUnique({
      where: { id },
    });
  }

  // update(id: number, updateCategoryDto: UpdateCategoryDto) {
  //   return `This action updates a #${id} category`;
  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
  return await this.prisma.category.update({
    where: { id },
    data: {
      ...updateCategoryDto, // Prisma sẽ bỏ qua undefined, chỉ update các trường có giá trị
    },
  });
  }
  

  // remove(id: number) {
  //   return `This action removes a #${id} category`;
  // }
  async remove(id: number) {
    return await this.prisma.category.delete({
      where: { id },
    });
  }
}
