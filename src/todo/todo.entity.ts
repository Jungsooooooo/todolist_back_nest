import { UUID } from 'crypto';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Todo')
export class Todo {
  @PrimaryGeneratedColumn('uuid')
  uid: UUID;

  @Column()
  do: string;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;
}
