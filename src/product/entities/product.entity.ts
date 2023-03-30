import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { AbstractEntity } from "../../common/abstract.entity";

@Entity()
export class Product extends AbstractEntity {

  //상품명, 카테고리, 가격, 설명, 리뷰, 재고카운트
  @Column()
  public name: string;

  @Column()
  public category: string;

  @Column()
  public price: number;

  @Column()
  public desc: string;

}


