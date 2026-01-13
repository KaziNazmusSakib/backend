import { Entity, Column } from 'typeorm';
import { User } from '../user/user.entity';
 
@Entity('suppliers')
export class Supplier extends User {
  @Column({ default: 'supplier' })
  declare role: string;
 
  @Column()
  companyName: string;
 
  @Column({ nullable: true })
  contactPhone: string;
}