import { IsNumber } from 'class-validator';

export class AddToCartDto {
  @IsNumber()
  buyerId: number;

  @IsNumber()
  productId: number;

  @IsNumber()
  quantity: number;
}