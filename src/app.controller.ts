import { ChatOpenAI } from '@langchain/openai';
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    const model = new ChatOpenAI({
      modelName: 'gpt-3.5-turbo',
      temperature: 2,
      openAIApiKey: process.env.OPENAI_API_KEY,
    });

    return model.invoke('오늘 점심 추천해줘!');
  }
}
