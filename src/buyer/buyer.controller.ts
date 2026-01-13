import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { BuyerService } from './buyer.service';
import { JwtAuthGuard } from '../common/guards/jwt.guard';

@Controller('buyer')
@UseGuards(JwtAuthGuard)
export class BuyerController {
  constructor(private buyerService: BuyerService) {}

  @Get()
  getAll() {
    return this.buyerService.findAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.buyerService.findOne(+id);
  }
}