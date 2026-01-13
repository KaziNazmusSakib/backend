import { Entity, Column, OneToMany } from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { Order } from '../../orders/entities/order.entity';

@Entity('buyers')
export class Buyer extends User {
  @Column({ nullable: true })
  shippingAddress: string;

  @Column({ nullable: true })
  phone: string;

  @OneToMany(() => Order, order => order.buyer)
  orders: Order[];
}