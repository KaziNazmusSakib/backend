import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Seller } from './seller.entity';
import { SellerService } from './seller.service';
import { SellerController } from './seller.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Seller])],
  providers: [SellerService],
  controllers: [SellerController],
})
export class SellerModule {}