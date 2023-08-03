import { UUID } from 'crypto';

export class TodoResponseDto {
  todo: string;

  startDate: Date;

  uid: UUID;

  state: string;
}
