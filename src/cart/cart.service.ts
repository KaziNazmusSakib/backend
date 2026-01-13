import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cart } from './cart.entity';
import { CartItem } from './cart-item.entity';
import { AddToCartDto } from './cart.dto';
 
@Injectable()
export class CartService {
  constructor(
    @InjectRepository(Cart)
    private cartRepo: Repository<Cart>,
    @InjectRepository(CartItem)
    private itemRepo: Repository<CartItem>,
  ) {}
 
  getCart(userId: number) {
    return this.cartRepo.findOne({ where: { userId }, relations: ['items'] });
  }
 
  async addToCart(dto: AddToCartDto) {
    let cart = await this.cartRepo.findOne({ where: { userId: dto.userId } });
    if (!cart) {
      cart = this.cartRepo.create({ userId: dto.userId });
      await this.cartRepo.save(cart);
    }
    const item = this.itemRepo.create({ ...dto, cart });
    await this.itemRepo.save(item);
    return cart;
  }
 
  async removeItem(itemId: number) {
    return this.itemRepo.delete(itemId);
  }
}