import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Seller } from './seller.entity';
 
@Injectable()
export class SellerService {
  constructor(
    @InjectRepository(Seller)
    private sellerRepo: Repository<Seller>,
  ) {}
 
  findAll() {
    return this.sellerRepo.find();
  }
 
  findOne(id: number) {
    return this.sellerRepo.findOne({ where: { id } });
  }
}