import { Controller, Get, Post, Body, Param, Delete, UseGuards } from '@nestjs/common';
import { CartService } from './cart.service';
import { AddToCartDto } from './cart.dto';
import { JwtAuthGuard } from '../common/guards/jwt.guard';
 
@Controller('cart')
@UseGuards(JwtAuthGuard)
export class CartController {
  constructor(private cartService: CartService) {}
 
  @Get(':userId')
  getCart(@Param('userId') userId: string) {
    return this.cartService.getCart(+userId);
  }
 
  @Post()
  addToCart(@Body() dto: AddToCartDto) {
    return this.cartService.addToCart(dto);
  }
 
  @Delete('item/:itemId')
  removeItem(@Param('itemId') itemId: string) {
    return this.cartService.removeItem(+itemId);
  }
}