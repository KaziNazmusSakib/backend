import { Controller, Get, Param, Post, Body, UseGuards } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminActionDto } from './admin.dto';
import { JwtAuthGuard } from '../common/guards/jwt.guard';
import { RolesGuard } from '../common/guards/role.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { UserRole } from '../user/user.entity';

@Controller('admin')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles(UserRole.ADMIN)
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get()
  async findAllAdmins() {
    return this.adminService.findAllAdmins();
  }

  @Post(':id/log')
  async logAction(@Param('id') id: number, @Body() dto: AdminActionDto) {
    return this.adminService.logAction(id, dto);
  }
}