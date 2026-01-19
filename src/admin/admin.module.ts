import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Admin } from './admin.entity';
import { AdminActionLog } from './admin-action-log.entity';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Admin, AdminActionLog])],
  providers: [AdminService],
  controllers: [AdminController],
})
export class AdminModule {}