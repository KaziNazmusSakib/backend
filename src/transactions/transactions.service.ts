import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Transaction } from './transactions.entity';
import { CreateTransactionDto } from './transactions.dto';

@Injectable()
export class TransactionsService {
  constructor(@InjectRepository(Transaction) private repo: Repository<Transaction>) {}

  async create(dto: CreateTransactionDto) {
    const transaction = this.repo.create({
      buyer: { id: dto.buyerId } as any,
      order: { id: dto.orderId } as any,
      amount: dto.amount,
      status: dto.status,
      paymentMethod: dto.paymentMethod,
    });
    return this.repo.save(transaction);
  }

  async findAll() {
    return this.repo.find({ relations: ['buyer', 'order'] });
  }
}