import { UUID } from 'crypto';
import { User } from 'src/user/user.entity';

export class TodoRequestUidDto {
  year: number;

  month: number;

  user: UUID;
}
