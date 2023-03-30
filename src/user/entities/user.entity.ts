import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { AbstractEntity } from "../../common/abstract.entity";

@Entity()
export class User extends AbstractEntity {

  @Column({ unique: true })
  public email: string;

  @Column()
  public username: string;

  @Column()
  public password: string;

  @Column()
  public phone: number;

  @Column({ default: true })
  public bio: boolean;



}
