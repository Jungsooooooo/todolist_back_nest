import { Between, DataSource, Repository } from 'typeorm';
import { Todo } from './todo.entity';
import { Injectable } from '@nestjs/common';

import { UUID } from 'crypto';
import { User } from 'src/user/user.entity';
import { TodoRequestDto } from './todo.requestdto';
import { TodoRequestUidDto } from './todo.requestuiddto';
import { todo } from 'node:test';

@Injectable()
export class TodoRepository extends Repository<Todo> {
  constructor(private dataSource: DataSource) {
    super(Todo, dataSource.createEntityManager());
  }

  public getByUUID(uid: UUID) {
    return this.findOne({ where: { uid } });
  }

  public getDateByYearAndMonth(
    todoRequestUidDto: TodoRequestUidDto,
    user: User,
  ): Promise<Todo[]> {
    const year = todoRequestUidDto.year;
    const month = todoRequestUidDto.month;

    const startDate = new Date(year, month - 1, 1);
    const endDate = new Date(year, month, 0);

    return this.find({
      where: {
        startDate: Between(startDate, endDate),
        user: user,
      },
      order: { startDate: 'ASC' },
    });
  }

  public getAll() {
    return this.find({ order: { startDate: 'DESC' } });
  }

  public getDataByYearAndMonthAndDate(
    year: number,
    month: number,
    date: number,
  ): Promise<Todo[]> {
    const formatDate = new Date(year + '-' + month + '-' + date);

    return this.find({ where: { startDate: formatDate } });
  }
}
