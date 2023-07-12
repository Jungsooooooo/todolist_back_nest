import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123456',
      database: 'todo',
      entities: ['dist/**/*.entity.{ts,js}'],
      synchronize: true,
    }),
    TodoModule,
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class AppModule {}
