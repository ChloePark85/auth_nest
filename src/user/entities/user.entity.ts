import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  public id?: string;

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
