import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { AdminActionLog } from './admin-action-log.entity';

@Entity('admins')
export class Admin {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ default: 'full' })
  permissions: string;

  @OneToMany(() => AdminActionLog, (log) => log.admin)
  actionLogs: AdminActionLog[];
}