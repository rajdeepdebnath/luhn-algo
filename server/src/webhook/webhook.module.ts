import { Module } from '@nestjs/common';
import { WebhookController } from './webhook.controller';
import { WebhookService } from './webhook.service';
import { ValidationModule } from 'src/validation/validation.module';
import { ValidationService } from 'src/validation/validation.service';

@Module({
  imports: [ValidationModule],
  controllers: [WebhookController],
  providers: [WebhookService, ValidationService],
})
export class WebhookModule {}
