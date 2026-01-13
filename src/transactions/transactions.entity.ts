import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';
 
@Entity('transactions')
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;
 
  @Column()
  orderId: number;
 
  @Column('decimal')
  amount: number;
 
  @Column()
  status: string;
 
  @CreateDateColumn()
  createdAt: Date;
}