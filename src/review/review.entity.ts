import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';
 
@Entity('reviews')
export class Review {
  @PrimaryGeneratedColumn()
  id: number;
 
  @Column()
  productId: number;
 
  @Column()
  userId: number;
 
  @Column()
  rating: number;
 
  @Column('text')
  comment: string;
 
  @CreateDateColumn()
  createdAt: Date;
}