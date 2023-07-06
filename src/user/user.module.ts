import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserRepository } from './user.repository';
import { TypeOrmExModule } from 'src/typeorm-ex.module';

@Module({
  imports: [TypeOrmExModule.forCustomRepository([UserRepository])],
  providers: [UserService, UserRepository],
  controllers: [UserController],
})
export class UserModule {}
