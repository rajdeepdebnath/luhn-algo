import { Injectable } from '@nestjs/common';
import { Twilio } from 'twilio';
import { SmsDto } from './smsDto';

@Injectable()
export class SmsService {
  client: Twilio;

  constructor() {
    this.client = new Twilio(
      'AC9e751db84a8f50a747c7ec6820657c70',
      'aceaaa639c6001bc9198d629e92779bc',
    );
  }
  async sendwelcomeSms(smsDto: SmsDto) {
    try {
      const body = `Hi ${smsDto.name}, Welcome to CVV. Please SMS to +19036003258 with a credit card no to verify it.`;
      let response = await this.client.messages.create({
        body,
        from: '+19036003258',
        to: smsDto.number,
      });

      await this.client.messages.create({
        from: 'whatsapp:+14155238886d',
        body,
        to: `whatsapp:${smsDto.number}`,
      });
    } catch (error) {
      console.log(error);
    }
  }
}
