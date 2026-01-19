import { IsEmail, IsString, MinLength, IsOptional } from 'class-validator';

export class LoginDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}

// Base DTO
export class RegisterDto {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8)
  password: string;

  @IsString()
  role: string; // buyer, seller, supplier
}

// Buyer-specific fields
export class BuyerRegisterDto extends RegisterDto {
  @IsString()
  name: string;

  @IsString()
  address: string;

  @IsString()
  phone: string;
}

// Seller-specific fields
export class SellerRegisterDto extends RegisterDto {
  @IsString()
  shopName: string;

  @IsString()
  shopAddress: string;

  @IsString()
  phone: string;
}

// Supplier-specific fields
export class SupplierRegisterDto extends RegisterDto {
  @IsString()
  companyName: string;

  @IsString()
  contactNumber: string;
}