import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Buyer } from '../buyer/buyer.entity';
import { Seller } from '../seller/seller.entity';
import { OrderItem } from './order-item.entity';

@Entity('orders')
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  status: string;

  @Column('decimal')
  totalAmount: number;

  @ManyToOne(() => Buyer, (buyer) => buyer.orders)
  buyer: Buyer;

  @ManyToOne(() => Seller, (seller) => seller.orders)
  seller: Seller;

  @OneToMany(() => OrderItem, (item) => item.order)
  orderItems: OrderItem[];
}