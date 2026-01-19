import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { SellerService } from './seller.service';
import { SellerRegisterDto } from './seller.dto';

@Controller('seller')
export class SellerController {
  constructor(private readonly sellerService: SellerService) {}

  @Post('register')
  async register(@Body() dto: SellerRegisterDto) {
    return this.sellerService.register(dto);
  }

  @Get()
  async findAll() {
    return this.sellerService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.sellerService.findOne(id);
  }
}