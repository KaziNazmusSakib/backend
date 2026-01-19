import { IsEmail, IsString, MinLength } from 'class-validator';

export class SellerRegisterDto {
  @IsString()
  shopName: string;

  @IsString()
  shopAddress: string;

  @IsString()
  phone: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8)
  password: string;
}