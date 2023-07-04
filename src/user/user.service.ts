import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { UUID } from 'crypto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(uid: UUID): Promise<User | null> {
    return this.usersRepository.findOneBy({ uid });
  }

  async remove(uid: UUID): Promise<void> {
    await this.usersRepository.delete(uid);
  }
}
