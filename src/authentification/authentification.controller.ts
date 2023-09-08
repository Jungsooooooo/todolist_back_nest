import { Body, Controller, Get, UseGuards } from '@nestjs/common';
import AuthService from './authentification.service';
import { AuthGuard } from '@nestjs/passport/dist/auth.guard';
import { UserRequestDto } from 'src/user/user.requestdto';
import { Post } from '@nestjs/common';

@Controller('/api/authentification')
export class AuthentificationController {
  constructor(private authService: AuthService) {}

  @Post('/login')
  login(@Body() userRequestdto: UserRequestDto) {
    return this.authService.signIn(userRequestdto);
  }

  @Get('/test')
  @UseGuards(AuthGuard())
  test() {
    console.log('hi');
  }
}
