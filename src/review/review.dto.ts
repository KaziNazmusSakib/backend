import { IsNumber, IsString, Min, Max } from 'class-validator';
 
export class CreateReviewDto {
  @IsNumber()
  productId: number;
 
  @IsNumber()
  userId: number;
 
  @IsNumber()
  @Min(1)
  @Max(5)
  rating: number;
 
  @IsString()
  comment: string;
}