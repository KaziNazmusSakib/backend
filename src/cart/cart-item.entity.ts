import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

import { Cart } from './cart.entity';

import { Product } from '../product/product.entity';
 
@Entity('cart_items')

export class CartItem {

  @PrimaryGeneratedColumn()

  id: number;
 
  @Column()

  quantity: number;
 
  @ManyToOne(() => Cart, cart => cart.items)

  cart: Cart;
 
  @ManyToOne(() => Product)

  product: Product;

}
 