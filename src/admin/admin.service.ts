import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Admin } from './admin.entity';
import { AdminActionLog } from './admin-action-log.entity';
import { AdminActionDto } from './admin.dto';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Admin) private adminRepo: Repository<Admin>,
    @InjectRepository(AdminActionLog) private logRepo: Repository<AdminActionLog>,
  ) {}

  async findAllAdmins() {
    return this.adminRepo.find();
  }

  async logAction(adminId: number, dto: AdminActionDto) {
    const log = this.logRepo.create({ action: dto.action, admin: { id: adminId } as Admin });
    return this.logRepo.save(log);
  }
}