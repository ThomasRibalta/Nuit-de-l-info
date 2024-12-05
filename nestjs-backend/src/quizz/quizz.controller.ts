import { QuizzService } from './quizz.service';
import { Body, Controller, Get, Param, HttpException, HttpStatus } from '@nestjs/common';


@Controller('quizz')
export class QuizzController {
	constructor(private readonly quizzservice : QuizzService){}

	@Get(':id')
	getResponse(@Param() id : string){
		//this.quizzservice.getresponse(response);
		return new HttpException(
      { clients: "je", currentPage: "te", totalPages: "y" },
      HttpStatus.OK,) }

}
