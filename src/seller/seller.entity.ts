import { Entity, Column } from 'typeorm';
import { User } from '../user/user.entity';
 
@Entity('sellers')
export class Seller extends User {
  @Column({ default: 'seller' })
  declare role: string;
 
  @Column()
  storeName: string;
 
  @Column({ nullable: true })
  storeDescription: string;
}