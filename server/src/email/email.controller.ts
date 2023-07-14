import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { EmailService } from './email.service';
import { EmailDto } from './emailDto';

@ApiTags('email')
@Controller('email')
export class EmailController {
  constructor(private emailService: EmailService) {}

  @Post('/')
  async sendEmail(@Body() emailDto: EmailDto) {
    this.emailService.sendEmail(emailDto);
  }
}
