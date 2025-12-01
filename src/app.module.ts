import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';
import { PrismaModule } from './prisma.module';
import { HomeController } from './home/home.controller';
// import { join } from 'path';
// import hbs from 'hbs';
@Module({
  imports: [CategoryModule, ProductModule, PrismaModule],
  controllers: [AppController, HomeController],
  providers: [AppService],
})
export class AppModule {
  // configure(consumer){
  //   static configureViews(app: ExpressAdapter) {
  //     app.set('views', join(__dirname, '..', 'views'));
  //     app.set('view engine', 'hbs');
  //   }

  // }
}
