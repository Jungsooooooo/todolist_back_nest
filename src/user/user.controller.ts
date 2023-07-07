import { Controller, Get, Param } from '@nestjs/common';
import { UUID } from 'crypto';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('/st')
  getString(): Promise<User[]> {
    return this.userService.getHello();
  }
}
