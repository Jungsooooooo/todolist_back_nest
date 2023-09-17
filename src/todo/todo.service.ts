import { Injectable } from '@nestjs/common';
import { TodoRepository } from './todo.repository';
import { Todo } from './todo.entity';
import { UUID } from 'crypto';
import { TodoRequestDto } from './todo.requestdto';
import { TodoResponseDto } from './todo.responsedto';
import moment from 'moment';
import { User } from 'src/user/user.entity';
import { TodoRequestUidDto } from './todo.requestuiddto';
import { UserRepository } from 'src/user/user.repository';

@Injectable()
export class TodoService {
  constructor(
    private todoRepository: TodoRepository,
    private userRepository: UserRepository,
  ) {}

  getAll(): Promise<Todo[]> {
    return this.todoRepository.getAll();
  }

  getTodo(uid: UUID): Promise<Todo> {
    return this.todoRepository.getByUUID(uid);
  }

  async getDateByYearAndMonth(
    todoRequestUidDto: TodoRequestUidDto,
  ): Promise<Todo[]> {
    const user = await this.userRepository.getByUUID(todoRequestUidDto.user);
    return this.todoRepository.getDateByYearAndMonth(todoRequestUidDto, user);
  }

  async createTodo(todoRequestDto: TodoRequestDto) {
    const { do: string, startDate, endDate, user: User } = todoRequestDto;

    const todo = this.todoRepository.create({
      do: string,
      startDate,
      endDate,
      user: User,
    });

    await this.todoRepository.save(todo);

    return todo;
  }

  async deleteTodo(uid: UUID): Promise<void> {
    this.todoRepository.delete(uid);
  }

  async updateTodo(uid: UUID, todoRequestDto): Promise<Todo> {
    await this.todoRepository.update(uid, todoRequestDto);
    return this.todoRepository.getByUUID(uid);
  }

  async getTodoResponse(): Promise<TodoResponseDto[]> {
    const entities: Todo[] = await this.todoRepository.find();

    const responseDtos: TodoResponseDto[] = entities.map((entity) => ({
      todo: entity.do,
      startDate: entity.startDate,
      uid: entity.uid,
      state: entity.state,
    }));
    return responseDtos;
  }

  getDateByDate(year: number, month: number, date: number): Promise<Todo[]> {
    return this.todoRepository.getDataByYearAndMonthAndDate(year, month, date);
  }
}
