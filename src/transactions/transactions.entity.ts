import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Buyer } from '../buyer/buyer.entity';
import { Order } from '../order/order.entity';

@Entity('transactions')
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('decimal')
  amount: number;

  @Column()
  status: string;

  @Column()
  paymentMethod: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @ManyToOne(() => Buyer, (buyer) => buyer.id)
  buyer: Buyer;

  @ManyToOne(() => Order, (order) => order.id)
  order: Order;
}