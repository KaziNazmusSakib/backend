import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Review } from './review.entity';
import { CreateReviewDto } from './review.dto';

@Injectable()
export class ReviewService {
  constructor(@InjectRepository(Review) private repo: Repository<Review>) {}

  async create(dto: CreateReviewDto) {
    const review = this.repo.create({
      product: { id: dto.productId } as any,
      buyer: { id: dto.buyerId } as any,
      rating: dto.rating,
      comment: dto.comment,
    });
    return this.repo.save(review);
  }

  async findByProduct(productId: number) {
    return this.repo.find({ where: { product: { id: productId } }, relations: ['buyer'] });
  }
}