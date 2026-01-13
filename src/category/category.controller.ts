import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './category.dto';
 
@Controller('category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}
 
  @Get()
  getAll() {
    return this.categoryService.findAll();
  }
 
  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.categoryService.findOne(+id);
  }
 
  @Post()
  create(@Body() dto: CreateCategoryDto) {
    return this.categoryService.create(dto);
  }
}