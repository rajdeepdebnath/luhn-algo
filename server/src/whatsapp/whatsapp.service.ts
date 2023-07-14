import { Injectable } from '@nestjs/common';
import { Twilio } from 'twilio';
import { WhatsappDto } from './whatsappDto';
import { TwilioService } from 'src/twilio/twilio.service';

@Injectable()
export class WhatsappService {
  constructor(private twilioService: TwilioService) {}

  async sendWhatsapp(whatsAppDto: WhatsappDto) {
    try {
      const body = `Hello, Welcome to CVV. ${whatsAppDto.text} Please reply with a credit card no to verify it.`;

      await this.twilioService.client.messages.create({
        from: `whatsapp:${process.env.TWILIO_WHATSAPP_NO}`,
        body,
        to: `whatsapp:${whatsAppDto.number}`,
      });
    } catch (error) {
      console.log(error);
    }
  }
}
