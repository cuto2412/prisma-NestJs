import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Prisma, PrismaClient } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
@Injectable()
export class ProductService {
  constructor(private prisma:PrismaService){}
  create(dto: CreateProductDto) {
    return this.prisma.product.create({ data: dto });
  }

  findAll() {
    return this.prisma.product.findMany();
  }

  findOne(id: number) {
    return this.prisma.product.findUnique({
      where: { id },
    });
  }

  // update(id: number, updateProductDto: UpdateProductDto) {
  //   return `This action updates a #${id} product`;
  // }
  update(id: number, dto: UpdateProductDto) {
    return this.prisma.product.update({
      where: { id },
      data: {
        ...dto, // Prisma sẽ bỏ qua undefined, chỉ update các trường có giá trị
      },
    });
    }

  remove(id: number) {
    return this.prisma.product.delete({
      where: {id},
    });
  }
  
}
