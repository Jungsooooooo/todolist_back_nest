import { DataSource, Repository } from 'typeorm';
import { User } from './user.entity';
import { Injectable } from '@nestjs/common';
import { UserRequestDto } from './user.requestdto';
import * as bcrypt from 'bcrypt';
// import { CustomRepository } from 'src/typeorm-ex.decorator';

import { UUID } from 'crypto';

@Injectable()
export class UserRepository extends Repository<User> {
  constructor(private dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }

  public getByUUID(uid: UUID) {
    return this.findOne({ where: { uid } });
  }

  public async getByIdAndPassword(userRequestDto: UserRequestDto) {
    const salt = await bcrypt.genSalt(10);
    const id: string = userRequestDto.id;
    let password: string = userRequestDto.password;

    // if (id === null || password === null) {
    //   return null;
    // }

    let user = await this.findOne({
      where: {
        id,
      },
    });

    let check = await bcrypt.compare(password, user.password);
    if (check) {
      return user;
    } else {
      return null;
    }
  }
}
