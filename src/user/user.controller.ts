import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Delete,
  Put,
} from '@nestjs/common';
import { UUID } from 'crypto';
import { UserService } from './user.service';
import { User } from './user.entity';
import { UserRequestDto } from './user.requestdto';

@Controller('/api/user')
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

  @Get('/check/:userid')
  getUserId(@Param('userid') id: string): Promise<User[]> {
    return this.userService.getUserId(id);
  }

  @Post()
  createUser(@Body() userRequestDto: UserRequestDto) {
    return this.userService.createUser(userRequestDto);
  }

  @Post('/login')
  loginUser(@Body() userRequestDto: UserRequestDto) {
    return this.userService.loginUser(userRequestDto);
  }

  @Delete('/:id')
  deleteUser(@Param('id') uid: UUID): Promise<void> {
    return this.userService.deleteUser(uid);
  }

  @Put('/:id')
  updateUser(
    @Param('id') uid: UUID,
    @Body() userRequestDto: UserRequestDto,
  ): Promise<User> {
    return this.userService.updateUser(uid, userRequestDto);
  }
}
