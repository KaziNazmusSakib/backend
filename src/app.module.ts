 
// src/app.module.ts (updated)
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
// import { AdminModule } from './admin/admin.module';
import { BuyerModule } from './buyer/buyer.module';
// import { SellerModule } from './seller/seller.module';
// import { SupplierModule } from './supplier/supplier.module';
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';
// import { CategoryModule } from './category/category.module';
// import { CartModule } from './cart/cart.module';
// import { ReviewModule } from './review/review.module';
import { NotificationsModule } from './notifications/notifications.module';
// import { TransactionsModule } from './transactions/transactions.module';
import { User } from './user/user.entity';
import { AuthModule } from './modules/auth/auth.module';
import { SellerModule } from './modules/seller/seller.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT || '5432') || 5432,
      username: process.env.DB_USERNAME || 'postgres',
      password: process.env.DB_PASSWORD || 'Admin',
      database: process.env.DB_NAME || 'NexifyStore',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: process.env.NODE_ENV !== 'production',
      logging: process.env.NODE_ENV === 'development',
    }),
    AuthModule,
    // AdminModule,
    BuyerModule,
    // SellerModule,
    // SupplierModule,
    ProductModule,
    OrderModule,
    // CategoryModule,
    // CartModule,
    // ReviewModule,
    NotificationsModule,
    // TransactionsModule,
    SellerModule,
    UserModule,
  ],
})
export class AppModule {}
