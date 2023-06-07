import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  uid: number;

  @Column()
  userId: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column({ default: 'default' })
  nickname: string;
}
