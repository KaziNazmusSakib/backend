import { Entity, PrimaryGeneratedColumn, OneToMany, OneToOne, JoinColumn } from 'typeorm';
import { CartItem } from './cart-item.entity';
import { Buyer } from '../buyer/buyer.entity';

@Entity('carts')
export class Cart {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Buyer, buyer => buyer.cart)
  @JoinColumn()
  buyer: Buyer;

  @OneToMany(() => CartItem, item => item.cart)
  items: CartItem[];
}