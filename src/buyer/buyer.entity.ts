import { Entity, Column } from 'typeorm';
import { User } from '../user/user.entity';

@Entity('buyers')
export class Buyer extends User {
  @Column({ default: 'buyer' })
  declare role: string;

  @Column('text', { nullable: true })
  shippingAddress: string;
  orders: any;
}