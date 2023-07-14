import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SmsService } from './sms.service';
import { SmsDto } from './smsDto';

@ApiTags('sms')
@Controller('sms')
export class SmsController {
  constructor(private smsService: SmsService) {}

  @Post()
  async sendSms(@Body() smsDto: SmsDto) {
    await this.smsService.sendSms(smsDto);
  }
}
