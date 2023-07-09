import { Controller, Get, Param } from '@nestjs/common';
import { UUID } from 'crypto';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('/all')
  getUserAll(): Promise<User[]> {
    return this.userService.getAll();
  }

  @Get('/:id')
  getUser(@Param('id') uid: UUID): Promise<User> {
    return this.userService.getUser(uid);
  }
}
