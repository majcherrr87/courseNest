import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FoxController } from './fox/fox.controller';

@Module({
  imports: [],
  controllers: [AppController, FoxController],
  providers: [AppService],
})
export class AppModule {}
