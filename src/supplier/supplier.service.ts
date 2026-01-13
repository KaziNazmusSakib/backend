import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Supplier } from './supplier.entity';
 
@Injectable()
export class SupplierService {
  constructor(
    @InjectRepository(Supplier)
    private supplierRepo: Repository<Supplier>,
  ) {}
 
  findAll() {
    return this.supplierRepo.find();
  }
 
  findOne(id: number) {
    return this.supplierRepo.findOne({ where: { id } });
  }
}