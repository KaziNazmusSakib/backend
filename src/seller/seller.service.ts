import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Seller } from './seller.entity';
import { SellerRegisterDto } from './seller.dto';

@Injectable()
export class SellerService {
  constructor(
    @InjectRepository(Seller)
    private sellerRepository: Repository<Seller>,
  ) {}

  async register(dto: SellerRegisterDto) {
    const hashedPassword = await bcrypt.hash(dto.password, 10);
    const seller = this.sellerRepository.create({ ...dto, password: hashedPassword });
    return this.sellerRepository.save(seller);
  }

  async findAll() {
    return this.sellerRepository.find();
  }

  async findOne(id: number) {
    return this.sellerRepository.findOne({ where: { id } });
  }
}