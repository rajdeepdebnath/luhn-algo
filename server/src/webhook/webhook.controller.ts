import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { WebhookService } from './webhook.service';

@ApiTags('webhook')
@Controller('webhook')
export class WebhookController {
  constructor(private webhookService: WebhookService) {}

  @Post('/sms')
  receiveIncomingSms(@Body() data: string) {
    console.log(data);

    return this.webhookService.getSmsResponse();
  }

  @Post('/whatsapp')
  receiveIncomingWhatsapp(@Body() data: string) {
    console.log(data);

    return this.webhookService.getSmsResponse();
  }
}
