import { User } from 'src/user/user.entity';

export class TodoRequestDto {
  do: string;

  startDate: Date;

  endDate: Date;

  state: string;

  user: User;
}
