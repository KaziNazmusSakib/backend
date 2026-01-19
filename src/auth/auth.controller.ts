import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto, BuyerRegisterDto, SellerRegisterDto, SupplierRegisterDto } from './auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() dto: LoginDto) {
    return this.authService.login(dto);
  }

  @Post('register/buyer')
  async registerBuyer(@Body() dto: BuyerRegisterDto) {
    return this.authService.register({ ...dto, role: 'buyer' });
  }

  @Post('register/seller')
  async registerSeller(@Body() dto: SellerRegisterDto) {
    return this.authService.register({ ...dto, role: 'seller' });
  }

  @Post('register/supplier')
  async registerSupplier(@Body() dto: SupplierRegisterDto) {
    return this.authService.register({ ...dto, role: 'supplier' });
  }
}