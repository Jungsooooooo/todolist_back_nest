import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import AuthService from './authentification.service';
import { UserService } from 'src/user/user.service';
import { ExtractJwt } from 'passport-jwt';
import { User } from 'src/user/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from 'src/user/user.repository';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {
    super({
      secretOrkey: 'Secret1234',
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }
  async validate(userId: string) {
    const user: User = await this.userRepository.findOne({
      where: { id: userId },
    });

    if (user === null) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
