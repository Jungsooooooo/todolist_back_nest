import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { TodoModule } from './todo/todo.module';
import { AuthentificationModule } from './authentification/authentification.module';

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5555,
      username: 'postgres',
      password: '1234',
      database: 'postgres',
      entities: ['dist/**/*.entity.{ts,js}'],
      synchronize: true,
    }),
    TodoModule,
    AuthentificationModule,
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class AppModule {}
