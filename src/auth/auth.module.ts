import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { User } from '../user/user.entity';
import { Buyer } from '../buyer/buyer.entity';
import { Seller } from '../seller/seller.entity';
import { Supplier } from '../supplier/supplier.entity';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'nexifystore-secret',
      signOptions: { expiresIn: '1d' },
    }),
    TypeOrmModule.forFeature([User, Buyer, Seller, Supplier]),
  ],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}