import { UUID } from 'crypto';
import { User } from 'src/user/user.entity';

export class TodoRequestDateUidDto {
  year: number;

  month: number;

  date: number;

  user: UUID;
}
