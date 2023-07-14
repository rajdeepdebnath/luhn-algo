import { Injectable } from '@nestjs/common';
import { ValidationService } from 'src/validation/validation.service';
import { twiml } from 'twilio';

@Injectable()
export class WebhookService {
  constructor(private validationService: ValidationService) {}

  getResponse(body: string) {
    const MessagingResponse = twiml.MessagingResponse;
    let message = null;
    const response = new MessagingResponse();
    try {
      let isValid = this.validationService.validateCreditCard(Number(body));

      message = response.message(
        `Credit card ${isValid ? 'valid' : 'invalid'}`,
      );
    } catch (error) {
      message = response.message('Error! Incorrect message format!');
    }
    return message.toString();
  }
}
