import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Buyer } from './buyer.entity';
import { BuyerRegisterDto } from './buyer.dto';

@Injectable()
export class BuyerService {
  constructor(
    @InjectRepository(Buyer)
    private buyerRepository: Repository<Buyer>,
  ) {}

  async register(dto: BuyerRegisterDto) {
    const hashedPassword = await bcrypt.hash(dto.password, 10);
    const buyer = this.buyerRepository.create({
      ...dto,
      password: hashedPassword,
    });
    return this.buyerRepository.save(buyer);
  }

  async findAll() {
    return this.buyerRepository.find();
  }

  async findOne(id: number) {
    return this.buyerRepository.findOne({ where: { id } });
  }
}