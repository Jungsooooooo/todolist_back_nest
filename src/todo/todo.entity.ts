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

  @CreateDateColumn({ type: 'date' })
  startDate: Date;

  @Column({ type: 'date', nullable: true })
  endDate: Date;
}
