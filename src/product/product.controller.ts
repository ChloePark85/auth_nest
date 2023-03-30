import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from "@nestjs/common";
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('product')
export class ProductController {
  constructor(
    private readonly productService: ProductService
  ) {}

  @Post('/create')
  async registerProduct(@Body() createProductDto: CreateProductDto) {
    const newProduct = await this.productService.createProduct(createProductDto)
    return newProduct;
  }

  @Get('/all')
  async getProducts(){
    const products = await this.productService.getAllProducts()
    return {
      count: products.length,
      products: products
    }
  }

  @Get('/:id')
  async getProduct(@Param('id') id: string){
    const product = await this.productService.getProduct(id)
    return product;
  }

  @Delete('/:id')
  async deleteProduct(@Param('id') id: string){
    const result = await this.productService.deleteProduct(id)
    return result;
  }

  @Put('/:id')
  async updateProduct(@Param('id') id: string, @Body() createProductDto: CreateProductDto ){
    const result = await this.productService.updatedProduct(id, createProductDto)
    return result;
  }

}
