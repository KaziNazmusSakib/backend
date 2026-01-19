import { IsNumber, IsString } from 'class-validator';

export class CreateReviewDto {
  @IsNumber()
  productId: number;

  @IsNumber()
  buyerId: number;

  @IsNumber()
  rating: number;

  @IsString()
  comment: string;
}