import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './product.dto';
import { JwtAuthGuard } from '../common/guards/jwt.guard';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  getAll() {
    return this.productService.findAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.productService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() dto: CreateProductDto) {
    return this.productService.create(dto);
  }
}