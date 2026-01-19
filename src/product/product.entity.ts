import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable, OneToMany } from 'typeorm';
import { Seller } from '../seller/seller.entity';
import { Supplier } from '../supplier/supplier.entity';
import { Category } from '../category/category.entity';
import { Review } from '../review/review.entity';

@Entity('products')
export class Product {
  [x: string]: any;
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column('decimal')
  price: number;

  @Column('int')
  stock: number;

  @ManyToOne(() => Seller, (seller) => seller.products)
  seller: Seller;

  @ManyToOne(() => Supplier, (supplier) => supplier.products)
  supplier: Supplier;

  @ManyToMany(() => Category, (category) => category.products)
  @JoinTable()
  categories: Category[];

  @OneToMany(() => Review, (review) => review.product)
  reviews: Review[];
}