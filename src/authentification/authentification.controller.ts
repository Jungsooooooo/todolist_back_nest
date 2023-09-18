import { Body, Controller, Get, UseGuards } from '@nestjs/common';
import AuthService from './authentification.service';
import { UserRequestDto } from 'src/user/user.requestdto';
import { Post } from '@nestjs/common';
import { JwtAuthGuard } from './auth.guard';
import { Public } from './public.decorator';

@Controller('/api/authentification')
export class AuthentificationController {
  constructor(private authService: AuthService) {}

  @Post('/login')
  login(@Body() userRequestdto: UserRequestDto) {
    return this.authService.validateUser(userRequestdto);
  }

  @Get('/test')
  @UseGuards(JwtAuthGuard)
  test() {
    console.log('hi');
  }
}
