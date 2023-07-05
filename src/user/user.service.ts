import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { UserRepository } from './user.repository';
import { UUID } from 'crypto';

@Injectable()
export class UserService {
  constructor(private usersRepository: UserRepository) {}

  findAll(id: UUID): Promise<User> {
    return this.usersRepository.getByUUID(id);
  }
}
