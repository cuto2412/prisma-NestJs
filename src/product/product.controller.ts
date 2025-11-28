import { Controller, Get, Post, Body, Patch, Param, Delete, Render } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}
   
  @Get()
  @Render('product/list')// -> views/product/list.hbs
  
  async list() {
    const products = await this.productService.findAll();
    return {products};
  }

   // ========== 2. CREATE FORM ==========

  @Get('create')
  @Render('product/create')
  async createForm() {
    return {};
  }
   @Post('create')
  async create(@Body() body) {
    await this.productService.create({
      name: body.name,
      price: Number(body.price),
      categoryId: Number(body.categoryId),
    });

    // Redirect sau khi tạo thành công
    return { redirect: '/product' };
  }

  // ========== 3. EDIT FORM ==========
  @Get(':id/edit')
  @Render('product/edit')
  async editForm(@Param('id') id: string) {
    const product = await this.productService.findOne(+id);
    return product;
  }

  @Post(':id/edit')
  async update(@Param('id') id: string, @Body() body) {
    await this.productService.update(+id, {
      name: body.name,
      price: Number(body.price),
      categoryId: Number(body.categoryId),
    });

    return { redirect: '/product' };
  }

  // ========== 4. DELETE ==========
  @Get(':id/delete')
  async remove(@Param('id') id: string) {
    await this.productService.remove(+id);
    return { redirect: '/product' };
  }
  
  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.productService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
  //   return this.productService.update(+id, updateProductDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.productService.remove(+id);
  // }
}




// export class ProductController {
//   constructor(private readonly productService: ProductService) {}

//   // ================================
//   // 1. TRANG DANH SÁCH SẢN PHẨM
//   // ================================
//   @Get()
//   async list() {
//     // Lấy danh sách sản phẩm từ DB
//     const products = await this.productService.findAll();

//     // Trả về HTML hiển thị sản phẩm
//     return `
//       <h1>Danh sách sản phẩm</h1>
//       <a href="/product/create">+ Thêm sản phẩm</a>

//       <ul>
//         ${products
//           .map(
//             (p) => `
//           <li>
//             <b>${p.name}</b> - ${p.price} VND  
//             | <a href="/product/${p.id}/edit">Sửa</a> 
//             | <a href="/product/${p.id}/delete">Xoá</a>
//           </li>
//         `,
//           )
//           .join('')}
//       </ul>
//     `;
//   }

//   // ================================
//   // 2. FORM TẠO SẢN PHẨM
//   // ================================
//   @Get('create')
//   createForm() {
//     // Hiển thị form HTML
//     return `
//       <h1>Thêm sản phẩm</h1>

//       <form method="POST" action="/product/create">
        
//         <!-- Tên sản phẩm -->
//         <label>Tên:</label>
//         <input name="name" placeholder="Product name" />

//         <!-- Giá -->
//         <label>Giá:</label>
//         <input name="price" type="number" placeholder="Price" />

//         <!-- Category ID (đã tạo thủ công) -->
//         <label>Category ID:</label>
//         <input name="categoryId" type="number" />

//         <button type="submit">Tạo</button>
//       </form>
//     `;
//   }

//   // Xử lý POST tạo sản phẩm
//   @Post('create')
//   create(@Body() body) {
//     // body nhận được gồm: name, price, categoryId

//     return this.productService.create({
//       name: body.name,
//       price: Number(body.price),
//       categoryId: Number(body.categoryId),
//     });
//   }

//   // ================================
//   // 3. FORM UPDATE SẢN PHẨM
//   // ================================
//   @Get(':id/edit')
//   async editForm(@Param('id') id: string) {
//     // Lấy sản phẩm để hiển thị lên form
//     const p = await this.productService.findOne(+id);

//     return `
//       <h1>Sửa sản phẩm</h1>

//       <form method="POST" action="/product/${id}/edit">
        
//         <label>Tên:</label>
//         <input name="name" value="${p?.name}" />

//         <label>Giá:</label>
//         <input name="price" type="number" value="${p?.price}" />

//         <label>Category ID:</label>
//         <input name="categoryId" type="number" value="${p?.categoryId}" />

//         <button type="submit">Cập nhật</button>
//       </form>
//     `;
//   }

//   // Xử lý update
//   @Post(':id/edit')
//   update(@Param('id') id: string, @Body() body) {
//     return this.productService.update(+id, {
//       name: body.name,
//       price: Number(body.price),
//       categoryId: Number(body.categoryId),
//     });
//   }

//   // ================================
//   // 4. XOÁ SẢN PHẨM
//   // ================================
//   @Get(':id/delete')
//   remove(@Param('id') id: string) {
//     return this.productService.remove(+id);
//   }
// }
