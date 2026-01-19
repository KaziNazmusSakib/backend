import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne, JoinColumn } from 'typeorm';
import { Order } from '../order/order.entity';
import { Cart } from '../cart/cart.entity';

@Entity('buyers')
export class Buyer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  address: string;

  @Column()
  phone: string;

  @OneToMany(() => Order, (order) => order.buyer)
  orders: Order[];

  @OneToOne(() => Cart, (cart) => cart.buyer)
  @JoinColumn()
  cart: Cart;
}