import { IsNumber } from 'class-validator';

export class CreateOrderDto {
  @IsNumber()
  buyerId: number;

  @IsNumber()
  sellerId: number;

  @IsNumber()
  totalAmount: number;
}