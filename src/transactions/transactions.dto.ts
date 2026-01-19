import { IsNumber, IsString } from 'class-validator';

export class CreateTransactionDto {
  @IsNumber()
  buyerId: number;

  @IsNumber()
  orderId: number;

  @IsNumber()
  amount: number;

  @IsString()
  status: string;

  @IsString()
  paymentMethod: string;
}