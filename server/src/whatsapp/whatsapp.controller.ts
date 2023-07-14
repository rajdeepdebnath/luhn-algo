import { Body, Controller, Post } from '@nestjs/common';
import { WhatsappDto } from './whatsappDto';
import { WhatsappService } from './whatsapp.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('whatsapp')
@Controller('whatsapp')
export class WhatsappController {
  constructor(private whatsappService: WhatsappService) {}

  @Post()
  async sendWhatsapp(@Body() whatsappDto: WhatsappDto) {
    await this.whatsappService.sendWhatsapp(whatsappDto);
  }
}
