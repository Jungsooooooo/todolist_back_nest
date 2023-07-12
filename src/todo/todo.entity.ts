import { UUID } from 'crypto';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity('Todo')
export class Todo {
  @PrimaryGeneratedColumn('uuid')
  uid: UUID;

  @Column()
  do: string;

  @CreateDateColumn({ type: 'timestamp' })
  startDate: Date;

  @Column({ type: 'timestamp' })
  endDate: Date;
}
