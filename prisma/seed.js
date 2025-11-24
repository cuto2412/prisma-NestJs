"use strict";
/**
 * File seed dữ liệu mẫu cho dự án NestJS + Prisma
 * ------------------------------------------------
 * Mục đích: Tự động đổ dữ liệu mẫu vào database Neon.tech
 * Gồm:
 *  - 3 danh mục (Laptop, Phone, Tablet)
 *  - Mỗi danh mục gồm nhiều sản phẩm mẫu
 */
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("@prisma/client");
var prisma = new client_1.PrismaClient();
console.log('okela');
// async function main() {
//   console.log('Đang xóa dữ liệu cũ...');
//   // Xóa theo thứ tự tránh lỗi khóa ngoại (product → category)
//   await prisma.product.deleteMany();
//   await prisma.category.deleteMany();
//   console.log(' Đã xóa toàn bộ dữ liệu cũ!');
//   console.log('Đang tạo danh mục...');
//   // Tạo danh mục + sản phẩm
//   const laptop = await prisma.category.create({
//     data: {
//       name: 'Laptop',
//       products: {
//         create: [
//           { name: 'MacBook Pro 16', price: 2500 },
//           { name: 'Dell XPS 15', price: 2000 },
//           { name: 'Asus ROG Strix', price: 2200 },
//         ],
//       },
//     },
//   });
//   const phone = await prisma.category.create({
//     data: {
//       name: 'Phone',
//       products: {
//         create: [
//           { name: 'iPhone 15 Pro Max', price: 1400 },
//           { name: 'Samsung Galaxy S24 Ultra', price: 1300 },
//           { name: 'Xiaomi 14', price: 900 },
//         ],
//       },
//     },
//   });
//   const tablet = await prisma.category.create({
//     data: {
//       name: 'Tablet',
//       products: {
//         create: [
//           { name: 'iPad Pro 12.9"', price: 1700 },
//           { name: 'Samsung Tab S9 Ultra', price: 1500 },
//         ],
//       },
//     },
//   });
//   console.log('Đã tạo dữ liệu mẫu!');
//   console.log({
//     laptop,
//     phone,
//     tablet,
//   });
//   console.log('Seed hoàn tất!');
// }
// // Chạy seed + đóng kết nối DB
// main()
//   .catch((e) => {
//     console.error('Lỗi seed:', e);
//     process.exit(1);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });
