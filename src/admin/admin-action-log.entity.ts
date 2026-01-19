import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Admin } from './admin.entity';

@Entity('admin_logs')
export class AdminActionLog {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  action: string;

  @ManyToOne(() => Admin, (admin) => admin.actionLogs)
  admin: Admin;
}