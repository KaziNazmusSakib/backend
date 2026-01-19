import { Injectable, UnauthorizedException, BadRequestException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User, UserRole } from '../user/user.entity';
import { LoginDto, BuyerRegisterDto, SellerRegisterDto, SupplierRegisterDto } from './auth.dto';
import { Buyer } from '../buyer/buyer.entity';
import { Seller } from '../seller/seller.entity';
import { Supplier } from '../supplier/supplier.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private userRepo: Repository<User>,
    @InjectRepository(Buyer) private buyerRepo: Repository<Buyer>,
    @InjectRepository(Seller) private sellerRepo: Repository<Seller>,
    @InjectRepository(Supplier) private supplierRepo: Repository<Supplier>,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<User> {
    const user = await this.userRepo.findOne({ where: { email } });
    if (user && await bcrypt.compare(password, user.password)) {
      return user;
    }
    throw new UnauthorizedException('Invalid credentials');
  }

  async login(dto: LoginDto) {
    const user = await this.validateUser(dto.email, dto.password);
    const payload = { email: user.email, sub: user.id, role: user.role };
    return { access_token: this.jwtService.sign(payload), role: user.role };
  }

  async register(dto: any) {
    if (dto.role === UserRole.ADMIN) {
      throw new UnauthorizedException('Admin cannot register via API');
    }

    const existing = await this.userRepo.findOne({ where: { email: dto.email } });
    if (existing) throw new BadRequestException('Email already exists');

    const hashedPassword = await bcrypt.hash(dto.password, 10);
    const user = this.userRepo.create({ email: dto.email, password: hashedPassword, role: dto.role });
    await this.userRepo.save(user);

    if (dto.role === UserRole.BUYER) {
      const buyer = this.buyerRepo.create({ ...dto, password: hashedPassword });
      await this.buyerRepo.save(buyer);
      return { message: 'Buyer registered successfully', buyer };
    }

    if (dto.role === UserRole.SELLER) {
      const seller = this.sellerRepo.create({ ...dto, password: hashedPassword });
      await this.sellerRepo.save(seller);
      return { message: 'Seller registered successfully', seller };
    }

    if (dto.role === UserRole.SUPPLIER) {
      const supplier = this.supplierRepo.create({ ...dto, password: hashedPassword });
      await this.supplierRepo.save(supplier);
      return { message: 'Supplier registered successfully', supplier };
    }

    throw new BadRequestException('Invalid role');
  }
}