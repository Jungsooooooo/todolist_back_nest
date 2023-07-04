import { UUID } from 'crypto';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  uid: UUID;

  @Column()
  id: string;

  @Column()
  password: string;

  @Column()
  name: string;
}
