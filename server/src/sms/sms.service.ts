import { Injectable } from '@nestjs/common';
import { Twilio } from 'twilio';
import { SmsDto } from './smsDto';
import { TwilioService } from 'src/twilio/twilio.service';

@Injectable()
export class SmsService {
  constructor(private twilioService: TwilioService) {}

  async sendSms(smsDto: SmsDto) {
    try {
      const body = `Hello, Welcome to CVV. ${smsDto.text} Please SMS to +19036003258 with a credit card no to verify it.`;
      let response = await this.twilioService.client.messages.create({
        body,
        from: process.env.TWILIO_SMS_NO,
        to: smsDto.number,
      });
    } catch (error) {
      console.log(error);
    }
  }
}
