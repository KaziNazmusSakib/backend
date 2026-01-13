import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Transaction } from './transactions.entity';
 
@Injectable()
export class TransactionsService {
  constructor(
    @InjectRepository(Transaction)
    private transactionRepo: Repository<Transaction>,
  ) {}
 
  create(orderId: number, amount: number, status: string) {
    const transaction = this.transactionRepo.create({ orderId, amount, status });
    return this.transactionRepo.save(transaction);
  }
}