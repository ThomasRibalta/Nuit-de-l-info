import { QuizzService } from './quizz.service';
import { Body, Controller, Get, Param, Post, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../jwt/jwt-auth.guard';

@Controller('quizz')
export class QuizzController {
  constructor(private readonly quizzservice: QuizzService) {}

	@UseGuards(JwtAuthGuard)
  @Get(':id')
  getQuestion(@Param('id') id: string, @Req() req: any,) {
    return this.quizzservice.getQuizz(id, req);
  }
	@UseGuards(JwtAuthGuard)
	@Post(':id')
  submitResponse(@Body() response: boolean, @Param('id') id: string, @Req() req: any) {
    return this.quizzservice.submitResponse(response, id, req);
  }
}
