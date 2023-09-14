import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { compare } from 'bcrypt';
import { User } from 'src/user/user.entity';
import { UserRequestDto } from 'src/user/user.requestdto';
import { UserRepository } from 'src/user/user.repository';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private userRepository: UserRepository,
    private jwtService: JwtService,
  ) {}

  async loginUser(userRequestDto: UserRequestDto): Promise<User> {
    const user = await this.userRepository.getByIdAndPassword(userRequestDto);
    return user;
  }

  async validateUser1(userRequestDto: UserRequestDto): Promise<any> {
    const user = await this.userRepository.getByIdAndPassword(userRequestDto);
    return user;
  }

  async validateUser(userRequestDto: UserRequestDto) {
    const user = await this.userRepository.getByIdAndPassword(userRequestDto);
    if (user !== null) {
      const userId = user.id;
      const payload = { userId };
      const accessToken = this.jwtService.sign(payload);

      return { accessToken: accessToken, uid: user.uid };
    } else {
      throw new UnauthorizedException('login falied');
    }
  }
}

export default AuthService;
