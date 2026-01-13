import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { SellerService } from './seller.service';
import { JwtAuthGuard } from '../common/guards/jwt.guard';
 
@Controller('seller')
@UseGuards(JwtAuthGuard)
export class SellerController {
  constructor(private sellerService: SellerService) {}
 
  @Get()
  getAll() {
    return this.sellerService.findAll();
  }
 
  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.sellerService.findOne(+id);
  }
}