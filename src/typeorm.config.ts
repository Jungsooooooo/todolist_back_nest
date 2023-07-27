import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '123456',
  database: 'todo',
  entities: ['dist/**/*.entity.{ts,js}'],
  synchronize: true,
};
