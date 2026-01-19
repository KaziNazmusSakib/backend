import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './order.entity';
import { CreateOrderDto } from './order.dto';

@Injectable()
export class OrderService {
  constructor(@InjectRepository(Order) private repo: Repository<Order>) {}

  async create(dto: CreateOrderDto) {
    const order = this.repo.create({ ...dto, status: 'pending' });
    return this.repo.save(order);
  }

  async findAll() {
    return this.repo.find({ relations: ['buyer', 'seller', 'orderItems'] });
  }

  async findOne(id: number) {
    return this.repo.findOne({ where: { id }, relations: ['buyer', 'seller', 'orderItems'] });
  }
}