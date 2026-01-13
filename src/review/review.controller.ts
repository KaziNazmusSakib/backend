import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ReviewService } from './review.service';
import { CreateReviewDto } from './review.dto';
 
@Controller('review')
export class ReviewController {
  constructor(private reviewService: ReviewService) {}
 
  @Get('product/:productId')
  getByProduct(@Param('productId') productId: string) {
    return this.reviewService.findByProduct(+productId);
  }
 
  @Post()
  create(@Body() dto: CreateReviewDto) {
    return this.reviewService.create(dto);
  }
}