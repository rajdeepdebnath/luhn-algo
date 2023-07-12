import { Injectable } from '@nestjs/common';
import { Twilio, twiml } from 'twilio';

@Injectable()
export class WebhookService {
  client: Twilio;

  constructor() {
    this.client = new Twilio(
      'AC9e751db84a8f50a747c7ec6820657c70',
      'aceaaa639c6001bc9198d629e92779bc',
    );
  }

  getSmsResponse() {
    const MessagingResponse = twiml.MessagingResponse;

    const response = new MessagingResponse();
    const message = response.message('Your credit is being verified...!');
    return message.toString();
  }
}
