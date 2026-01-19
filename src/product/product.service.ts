import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';
import { CreateProductDto } from './product.dto';

@Injectable()
export class ProductService {
  constructor(@InjectRepository(Product) private repo: Repository<Product>) {}

  async create(dto: CreateProductDto) {
    const product = this.repo.create(dto);
    return this.repo.save(product);
  }

  async findAll() {
    return this.repo.find({ relations: ['seller', 'supplier', 'categories'] });
  }

  async findOne(id: number) {
    return this.repo.findOne({ where: { id }, relations: ['seller', 'supplier', 'categories'] });
  }

  // async update(id: number, dto: Partial<CreateProductDto>) {
  //   await this.repo.update(id, dto as any);
  //   return this.findOne(id);
  // }

  async update(id: number, dto: Partial<CreateProductDto>) {
  const product = await this.repo.findOne({ where: { id } });
  if (!product) return null;

  Object.assign(product, dto);
  return this.repo.save(product);
  }

  async remove(id: number) {
    return this.repo.delete(id);
  }
}

