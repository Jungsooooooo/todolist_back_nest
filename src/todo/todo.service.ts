import { Injectable } from '@nestjs/common';
import { TodoRepository } from './todo.repository';
import { Todo } from './todo.entity';
import { UUID } from 'crypto';
import { TodoRequestDto } from './todo.requestdto';

@Injectable()
export class TodoService {
  constructor(private todoRepository: TodoRepository) {}

  getAll(): Promise<Todo[]> {
    return this.todoRepository.find();
  }

  getTodo(uid: UUID): Promise<Todo> {
    return this.todoRepository.getByUUID(uid);
  }

  async createTodo(todoRequestDto: TodoRequestDto) {
    const { do: string, endDate } = todoRequestDto;

    const todo = this.todoRepository.create({
      do: string,
      endDate,
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
}
