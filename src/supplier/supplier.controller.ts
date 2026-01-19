import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { SupplierService } from './supplier.service';
import { SupplierRegisterDto } from './supplier.dto';

@Controller('supplier')
export class SupplierController {
  constructor(private readonly supplierService: SupplierService) {}

  @Post('register')
  async register(@Body() dto: SupplierRegisterDto) {
    return this.supplierService.register(dto);
  }

  @Get()
  async findAll() {
    return this.supplierService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.supplierService.findOne(id);
  }
}