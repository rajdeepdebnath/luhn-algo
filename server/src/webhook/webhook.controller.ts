import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { WebhookService } from './webhook.service';
import { WebhookDto } from './webhookDto';

@ApiTags('webhook')
@Controller('webhook')
export class WebhookController {
  constructor(private webhookService: WebhookService) {}

  @Post('/sms')
  receiveIncomingSms(@Body() data: WebhookDto) {
    console.log(data);

    return this.webhookService.getResponse(data.Body);
  }

  @Post('/whatsapp')
  receiveIncomingWhatsapp(@Body() data: WebhookDto) {
    console.log(data);

    return this.webhookService.getResponse(data.Body);
  }
}
