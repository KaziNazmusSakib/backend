// src/modules/auth/auth.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';

// Entities
import { User } from '../user/entities/user.entity';
import { Buyer } from '../buyer/entities/buyer.entity';
import { Seller } from '../seller/entities/seller.entity';
import { SellerProfile } from '../seller/entities/seller-profile.entity';
import { Supplier } from '../supplier/entities/supplier.entity';
import { SupplierProfile } from '../supplier/entities/supplier-profile.entity';
import { Admin } from '../admin/entities/admin.entity';

// Controllers
import { AuthController } from './auth.controller';

// Services
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';

// Guards
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { RolesGuard } from './guards/roles.guard';

// Decorators
import { Roles } from './decorators/roles.decorator';

@Module({
  imports: [
    // Database entities
    TypeOrmModule.forFeature([
      User,
      Buyer,
      Seller,
      SellerProfile,
      Supplier,
      SupplierProfile,
      Admin,
    ]),
    
    // Passport for authentication
    PassportModule.register({ defaultStrategy: 'jwt' }),
    
    // JWT configuration
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET', 'your-super-secret-jwt-key-change-this-in-production'),
        signOptions: {
          expiresIn: configService.get<string>('JWT_EXPIRES_IN', '24h'),
          issuer: configService.get<string>('APP_NAME', 'ECommerceAPI'),
          audience: configService.get<string>('APP_URL', 'http://localhost:3000'),
        },
      }),
      inject: [ConfigService],
    }),
    
    // Configuration module
    ConfigModule,
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    JwtStrategy,
    LocalStrategy,
    JwtAuthGuard,
    LocalAuthGuard,
    RolesGuard,
    // Provide Roles decorator as a provider
    {
      provide: 'ROLES_DECORATOR',
      useValue: Roles,
    },
  ],
  exports: [
    AuthService,
    JwtModule,
    JwtAuthGuard,
    LocalAuthGuard,
    RolesGuard,
    PassportModule,
    TypeOrmModule,
  ],
})
export class AuthModule {}