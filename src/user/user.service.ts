import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { User } from './user.entity';
import { UUID } from 'crypto';
import { UserRequestDto } from './user.requestdto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  getAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  getUser(uid: UUID): Promise<User | undefined> {
    return this.userRepository.getByUUID(uid);
  }

  getUserForLogin(userRequestDto: UserRequestDto) {}

  async createUser(userRequestDto: UserRequestDto) {
    let { id, password, name } = userRequestDto;
    const salt = await bcrypt.genSalt();
    password = await bcrypt.hash(password, salt);
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

  async loginUser(userRequestDto: UserRequestDto): Promise<User> {
    const user = await this.userRepository.getByIdAndPassword(userRequestDto);
    return user;
  }
}
