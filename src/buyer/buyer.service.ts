import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Buyer } from './buyer.entity';

@Injectable()
export class BuyerService {
  constructor(
    @InjectRepository(Buyer)
    private buyerRepo: Repository<Buyer>,
  ) {}

  findAll() {
    return this.buyerRepo.find();
  }

  findOne(id: number) {
    return this.buyerRepo.findOne({ where: { id } });
  }
}