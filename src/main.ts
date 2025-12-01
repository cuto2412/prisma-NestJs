import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { ExpressAdapter } from '@nestjs/platform-express';
import { NestExpressApplication } from '@nestjs/platform-express';
import { setupView } from './view.config';
// import * as hbs from 'hbs';
async function bootstrap() {
 
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  
  setupView(app);// cấu hình view engine tại đây
  const port = process.env.PORT || 3000;
  // Thư mục views tuyệt đối
  // app.setBaseViewsDir(join(__dirname, '..', 'views'));
  // await app.listen(process.env.PORT ?? 3000);
  await app.listen(3000);
  
  console.log(`Server running on port ${port}`);
}
bootstrap();
