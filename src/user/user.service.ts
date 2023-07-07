import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { UUID } from 'crypto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  getHello(): Promise<User[]> {
    return this.userRepository.find();
  }
}
