import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Product } from '../product/product.entity';
 
@Entity('categories')
export class Category {
  @PrimaryGeneratedColumn()
  id: number;
 
  @Column()
  name: string;
 
  @Column()
  description: string;
 
  @OneToMany(() => Product, product => product.category)
  products: Product[];
}