import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from 'src/app.service';
import { UUID } from 'crypto';

@Controller('user')
export class UserController {
  constructor(private readonly appService: AppService) {}

  @Get('/st')
  getString(): string {
    return 'please do some';
  }
}
