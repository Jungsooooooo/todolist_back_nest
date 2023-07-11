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

  async createUser(userRequestDto: UserRequestDto) {
    const { id, password, name } = userRequestDto;

    const user = this.userRepository.create({
      id,
      password,
      name,
    });
    await this.userRepository.save(user);

    return user;
  }

  async deleteUser(uid: UUID): Promise<void> {
    this.userRepository.delete(uid);
  }

  async updateUser(uid: UUID, userRequestDto: UserRequestDto): Promise<User> {
    await this.userRepository.update(uid, userRequestDto);
    return this.userRepository.getByUUID(uid);
  }
}
