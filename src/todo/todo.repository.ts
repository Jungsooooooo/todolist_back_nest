import { Between, DataSource, Repository } from 'typeorm';
import { Todo } from './todo.entity';
import { Injectable } from '@nestjs/common';

import { UUID } from 'crypto';

@Injectable()
export class TodoRepository extends Repository<Todo> {
  constructor(private dataSource: DataSource) {
    super(Todo, dataSource.createEntityManager());
  }

  public getByUUID(uid: UUID) {
    return this.findOne({ where: { uid } });
  }

  public getDateByYearAndMonth(year: number, month: number): Promise<Todo[]> {
    const startDate = new Date(year, month - 1, 1);
    const endDate = new Date(year, month, 0);

    return this.find({
      where: { startDate: Between(startDate, endDate) },
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
