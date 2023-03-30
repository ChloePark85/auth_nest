import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  public id?: string;

  //상품명, 카테고리, 가격, 설명, 리뷰, 재고카운트
  @Column()
  public name: string;

  @Column()
  public category: string;

  @Column()
  public price: number;

  @Column()
  public desc: string;

  @Column()
  public review: string;

  @Column()
  public stockCount: number;
}


