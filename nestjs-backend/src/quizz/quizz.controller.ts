import { QuizzService } from './quizz.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('quizz')
export class QuizzController {
  constructor(private readonly quizzservice: QuizzService) {}

  @Get(':id')
  getQuestion(@Param('id') id: string) {
    return this.quizzservice.getQuizz(id);
  }
  @Post(':id')
  submitResponse(@Body() response: boolean, @Param('id') id: string) {
    return this.quizzservice.submitResponse(response, id);
  }
}
