import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SellerController } from './seller.controller';
import { SellerService } from './seller.service';
import { Seller } from './seller.entity';
 
@Module({
  imports: [TypeOrmModule.forFeature([Seller])],
  controllers: [SellerController],
  providers: [SellerService],
})
export class SellerModule {}