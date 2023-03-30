import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from "@nestjs/typeorm";
import { Product } from "./entities/product.entity";
import { Repository } from "typeorm";

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>
  ) {}

  async createProduct(userInput: CreateProductDto){
    const newProduct= await this.productRepository.create(userInput)
    await this.productRepository.save(newProduct);
    return newProduct;
  }

  async getAllProducts(){
    const products = await this.productRepository.find()
    return products;
  }

  async getProduct(id: string){
    const product = await this.productRepository.findOneBy({ id })
    // if (!product) {
    //   throw new HttpException('no product', HttpStatus.NOT_FOUND)
    // }
    return product;
  }

  async deleteProduct(id: string){
    const product = await this.productRepository.delete({id})
    return 'deleted product'
  }

  async updatedProduct(id: string, createProductDto: CreateProductDto){
    const updateProduct = await this.productRepository.update(id, createProductDto)
    return 'updated product'
  }

}
