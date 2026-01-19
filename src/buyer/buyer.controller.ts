import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { BuyerService } from './buyer.service';
import { BuyerRegisterDto } from './buyer.dto';

@Controller('buyer')
export class BuyerController {
  constructor(private readonly buyerService: BuyerService) {}

  @Post('register')
  async register(@Body() dto: BuyerRegisterDto) {
    return this.buyerService.register(dto);
  }

  @Get()
  async findAll() {
    return this.buyerService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.buyerService.findOne(id);
  }
}