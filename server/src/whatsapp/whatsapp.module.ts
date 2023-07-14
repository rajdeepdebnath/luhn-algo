import { Module } from '@nestjs/common';
import { WhatsappController } from './whatsapp.controller';
import { WhatsappService } from './whatsapp.service';
import { TwilioModule } from 'src/twilio/twilio.module';
import { TwilioService } from 'src/twilio/twilio.service';

@Module({
  imports: [TwilioModule],
  controllers: [WhatsappController],
  providers: [WhatsappService, TwilioService],
})
export class WhatsappModule {}
