import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './order.dto';
import { JwtAuthGuard } from '../common/guards/jwt.guard';

@Controller('order')
@UseGuards(JwtAuthGuard)
export class OrderController {
  constructor(private orderService: OrderService) {}

  @Get()
  getAll() {
    return this.orderService.findAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.orderService.findOne(+id);
  }

  @Post()
  create(@Body() dto: CreateOrderDto) {
    return this.orderService.create(dto);
  }
}