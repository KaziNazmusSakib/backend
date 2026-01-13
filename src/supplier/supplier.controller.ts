import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { SupplierService } from './supplier.service';
import { JwtAuthGuard } from '../common/guards/jwt.guard';
 
@Controller('supplier')
@UseGuards(JwtAuthGuard)
export class SupplierController {
  constructor(private supplierService: SupplierService) {}
 
  @Get()
  getAll() {
    return this.supplierService.findAll();
  }
 
  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.supplierService.findOne(+id);
  }
}