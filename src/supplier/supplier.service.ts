import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Supplier } from './supplier.entity';
import { SupplierRegisterDto } from './supplier.dto';

@Injectable()
export class SupplierService {
  constructor(
    @InjectRepository(Supplier)
    private supplierRepository: Repository<Supplier>,
  ) {}

  async register(dto: SupplierRegisterDto) {
    const hashedPassword = await bcrypt.hash(dto.password, 10);
    const supplier = this.supplierRepository.create({ ...dto, password: hashedPassword });
    return this.supplierRepository.save(supplier);
  }

  async findAll() {
    return this.supplierRepository.find();
  }

  async findOne(id: number) {
    return this.supplierRepository.findOne({ where: { id } });
  }
}