import { UUID } from 'crypto';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  IsNull,
} from 'typeorm';

@Entity('Todo')
export class Todo {
  @PrimaryGeneratedColumn('uuid')
  uid: UUID;

  @Column()
  do: string;

  @Column({ type: 'date', nullable: true })
  startDate: Date;

  @Column({ type: 'date', nullable: true })
  endDate: Date;

  @Column({ default: 'processing' })
  state: string;
}
