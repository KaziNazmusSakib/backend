import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { ReviewService } from './review.service';
import { CreateReviewDto } from './review.dto';

@Controller('reviews')
export class ReviewController {
  constructor(private readonly service: ReviewService) {}

  @Post()
  create(@Body() dto: CreateReviewDto) {
    return this.service.create(dto);
  }

  @Get(':productId')
  findByProduct(@Param('productId') productId: number) {
    return this.service.findByProduct(productId);
  }
}