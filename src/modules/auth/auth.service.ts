// src/modules/auth/auth.service.ts (partial)
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Buyer } from '../buyer/entities/buyer.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Buyer)
    private buyerRepository: Repository<Buyer>,
    private jwtService: JwtService,
  ) {}

  async validateBuyer(email: string, password: string): Promise<any> {
    const buyer = await this.buyerRepository.findOne({ where: { email } });
    
    if (buyer && await bcrypt.compare(password, buyer.password)) {
      const { password, ...result } = buyer;
      return result;
    }
    return null;
  }

  async buyerLogin(buyer: any) {
    const payload = { email: buyer.email, sub: buyer.id, role: 'buyer' };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}