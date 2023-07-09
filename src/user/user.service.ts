import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { User } from './user.entity';
import { UUID } from 'crypto';
import { UserRequestDto } from './user.requestdto';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  getAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  getUser(uid: UUID): Promise<User | undefined> {
    return this.userRepository.getByUUID(uid);
  }

  async createUser(userRequestDto: UserRequestDto): Promise<User> {
    const { id, password, name } = userRequestDto;

    const user = this.userRepository.create({
      id,
      password,
      name,
    });
    await this.userRepository.save(user);

    return user;
  }
}
