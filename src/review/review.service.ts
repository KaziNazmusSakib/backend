import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Review } from './review.entity';
import { CreateReviewDto } from './review.dto';
 
@Injectable()
export class ReviewService {
  constructor(
    @InjectRepository(Review)
    private reviewRepo: Repository<Review>,
  ) {}
 
  findByProduct(productId: number) {
    return this.reviewRepo.find({ where: { productId } });
  }
 
  create(dto: CreateReviewDto) {
    const review = this.reviewRepo.create(dto);
    return this.reviewRepo.save(review);
  }
}