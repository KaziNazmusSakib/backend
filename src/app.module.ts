import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';
import { BuyerModule } from './buyer/buyer.module';
import { SellerModule } from './seller/seller.module';
import { SupplierModule } from './supplier/supplier.module';
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';
import { CategoryModule } from './category/category.module';
import { CartModule } from './cart/cart.module';
import { NotificationsModule } from './notifications/notifications.module';
import { ReviewModule } from './review/review.module';
import { TransactionsModule } from './transactions/transactions.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync(typeOrmConfig),
    AuthModule,
    AdminModule,
    BuyerModule,
    SellerModule,
    SupplierModule,
    ProductModule,
    OrderModule,
    CategoryModule,
    CartModule,
    NotificationsModule,
    ReviewModule,
    TransactionsModule,
  ],
})
export class AppModule {}
