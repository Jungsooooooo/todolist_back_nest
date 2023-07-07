import { DataSource, Repository } from 'typeorm';
import { User } from './user.entity';
import { Injectable } from '@nestjs/common';
// import { CustomRepository } from 'src/typeorm-ex.decorator';

import { UUID } from 'crypto';

@Injectable()
export class UserRepository extends Repository<User> {
  constructor(private dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }

  async getByUUID(id: UUID) {
    return this.findOne({ where: { id } });
  }
}
