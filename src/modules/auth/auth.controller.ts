import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { BuyerRegisterDto } from './dto/buyer-register.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('buyer/register')
  async buyerRegister(@Body() buyerRegisterDto: BuyerRegisterDto) {
    return this.authService.registerBuyer(buyerRegisterDto);
  }
}