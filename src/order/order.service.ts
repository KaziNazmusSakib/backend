import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './order.entity';
import { OrderItem } from './order-item.entity';
import { CreateOrderDto } from './order.dto';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private orderRepo: Repository<Order>,
    @InjectRepository(OrderItem)
    private itemRepo: Repository<OrderItem>,
  ) {}

  findAll() {
    return this.orderRepo.find({ relations: ['items'] });
  }

  findOne(id: number) {
    return this.orderRepo.findOne({ where: { id }, relations: ['items'] });
  }

  async create(dto: CreateOrderDto) {
    const order = this.orderRepo.create(dto);
    await this.orderRepo.save(order);
    for (const item of dto.items) {
      const orderItem = this.itemRepo.create({ ...item, order });
      await this.itemRepo.save(orderItem);
    }
    return order;
  }
}