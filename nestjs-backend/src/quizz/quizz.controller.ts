import { QuizzService } from './quizz.service';
import { Body, Controller, Get, Param, HttpException, HttpStatus, Post } from '@nestjs/common';


@Controller('quizz')
export class QuizzController {
	constructor(private readonly quizzservice : QuizzService){}


	@Get(':id')
	GetQuestion(@Param('id') id : string){
		return this.quizzservice.GetQuestion(id)
	}
	@Post(':id')
	SubmitResponse(@Body() response : boolean, @Param('id') id : string ){
		return this.quizzservice.SubmitResponse(response, id);}
		
		

}
