import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn } from 'typeorm';
// import { Category } from '../category/category.entity';
// import { Seller } from '../seller/seller.entity';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('text')
  description: string;

  @Column('decimal')
  price: number;

  @Column()
  stock: number;

  @Column({ nullable: true })
  imageUrl: string;

  // @ManyToOne(() => Category, category => category.products)
  // category: Category;

  // @ManyToOne(() => Seller, seller => seller.products)
  // seller: Seller;

  @CreateDateColumn()
  createdAt: Date;
  category: any;
}