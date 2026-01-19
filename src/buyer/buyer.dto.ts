import { IsEmail, IsString, MinLength } from 'class-validator';

export class BuyerRegisterDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8)
  password: string;

  @IsString()
  address: string;

  @IsString()
  phone: string;
}