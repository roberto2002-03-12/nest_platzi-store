import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './controller/products/products.controller';
import { CategoryController } from './controller/category/category.controller';
import { OrderController } from './controller/order/order.controller';
import { CustomerController } from './controller/customer/customer.controller';
import { UserController } from './controller/user/user.controller';
import { BrandController } from './controller/brand/brand.controller';
import { ProductService } from './services/product/product.service';

@Module({
  imports: [],
  controllers: [AppController, ProductsController, CategoryController, OrderController, CustomerController, UserController, BrandController],
  providers: [AppService, ProductService],
})
export class AppModule {}
