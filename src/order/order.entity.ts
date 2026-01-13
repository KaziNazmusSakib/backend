import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, CreateDateColumn } from 'typeorm';
import { Buyer } from '../buyer/buyer.entity';
import { OrderItem } from './order-item.entity';

@Entity('orders')
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('decimal')
  totalAmount: number;

  @Column({ default: 'pending' })
  status: string;

  @ManyToOne(() => Buyer, buyer => buyer.orders)
  buyer: Buyer;

  @OneToMany(() => OrderItem, item => item.order)
  items: OrderItem[];

  @CreateDateColumn()
  createdAt: Date;
}