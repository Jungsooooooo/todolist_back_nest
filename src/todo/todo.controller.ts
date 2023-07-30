import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from './todo.entity';

import { UUID } from 'crypto';
import { TodoRequestDto } from './todo.requestdto';
import { TodoResponseDto } from './todo.responsedto';

@Controller('/api/todo')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Get('/all')
  getTodoAll(): Promise<TodoResponseDto[]> {
    return this.todoService.getTodoResponse();
  }

  @Get('/:id')
  getTodo(@Param('id') uid: UUID): Promise<Todo> {
    return this.todoService.getTodo(uid);
  }

  @Get('/:year/:month')
  getDataByYearAndMonth(
    @Param('year') year: number,
    @Param('month') month: number,
  ): Promise<Todo[]> {
    return this.todoService.getDateByYearAndMonth(year, month);
  }

  @Post()
  createTodo(@Body() todoRequestDto: TodoRequestDto) {
    return this.todoService.createTodo(todoRequestDto);
  }

  @Delete('/:id')
  deleteTodo(@Param('id') uid: UUID): Promise<void> {
    return this.todoService.deleteTodo(uid);
  }

  @Put('/:id')
  updateTodo(
    @Param('id') uid: UUID,
    @Body() todoRequestDto: TodoRequestDto,
  ): Promise<Todo> {
    return this.todoService.updateTodo(uid, todoRequestDto);
  }
}
