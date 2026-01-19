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
    private cartRepository: Repository<Cart>,
    @InjectRepository(CartItem)
    private cartItemRepository: Repository<CartItem>,
  ) {}

  async addToCart(dto: AddToCartDto) {
    let cart = await this.cartRepository.findOne({ where: { buyer: { id: dto.buyerId } }, relations: ['cartItems'] });
    if (!cart) {
      cart = this.cartRepository.create({ buyer: { id: dto.buyerId } as any });
      cart = await this.cartRepository.save(cart);
    }
    const item = this.cartItemRepository.create({
      cart,
      product: { id: dto.productId } as any,
      quantity: dto.quantity,
    });
    return this.cartItemRepository.save(item);
  }

  async getCart(buyerId: number) {
    return this.cartRepository.findOne({ where: { buyer: { id: buyerId } }, relations: ['cartItems', 'cartItems.product'] });
  }
}