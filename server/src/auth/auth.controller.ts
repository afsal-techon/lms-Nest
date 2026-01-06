import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/registerUser.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('register')
  async register(@Body() registerUserDto: RegisterDto): Promise<{
    token: string;
    success: boolean;
    message: string;
    statusCode: number;
  }> {
    return await this.authService.registerUser(registerUserDto);
  }
}
