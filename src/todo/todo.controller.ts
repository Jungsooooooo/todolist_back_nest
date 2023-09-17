import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  UseGuards,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from './todo.entity';

import { UUID } from 'crypto';
import { TodoRequestDto } from './todo.requestdto';
import { TodoResponseDto } from './todo.responsedto';
import { JwtAuthGuard } from 'src/authentification/auth.guard';
import { User } from 'src/user/user.entity';
import { TodoRequestUidDto } from './todo.requestuiddto';

@Controller('/api/todo')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Get('/all')
  @UseGuards(JwtAuthGuard)
  getTodoAll(): Promise<TodoResponseDto[]> {
    return this.todoService.getTodoResponse();
  }

  @Get('/:id')
  @UseGuards(JwtAuthGuard)
  getTodo(@Param('id') uid: UUID): Promise<Todo> {
    return this.todoService.getTodo(uid);
  }

  @Post('/findtododata')
  @UseGuards(JwtAuthGuard)
  getDataByYearAndMonth(
    @Body() todoRequestUidDto: TodoRequestUidDto,
  ): Promise<Todo[]> {
    return this.todoService.getDateByYearAndMonth(todoRequestUidDto);
  }

  @Get('/date/:year/:month/:date')
  @UseGuards(JwtAuthGuard)
  getDataByDate(
    @Param('year') year: number,
    @Param('month') month: number,
    @Param('date') date: number,
  ): Promise<Todo[]> {
    return this.todoService.getDateByDate(year, month, date);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  createTodo(@Body() todoRequestDto: TodoRequestDto) {
    return this.todoService.createTodo(todoRequestDto);
  }

  @Delete('/:id')
  @UseGuards(JwtAuthGuard)
  deleteTodo(@Param('id') uid: UUID): Promise<void> {
    return this.todoService.deleteTodo(uid);
  }

  @Put('/:id')
  @UseGuards(JwtAuthGuard)
  updateTodo(
    @Param('id') uid: UUID,
    @Body() todoRequestDto: TodoRequestDto,
  ): Promise<Todo> {
    return this.todoService.updateTodo(uid, todoRequestDto);
  }
}
