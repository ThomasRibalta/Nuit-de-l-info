import { QuestionSchema } from './schema/quizz.schema';
import { Import } from './../../../nuit-de-linfo-front/node_modules/@babel/types/lib/index-legacy.d';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { QuizzController } from './quizz.controller';
import { QuizzService } from './quizz.service';

@Module({
	imports : [MongooseModule.forFeature([{ name: 'Question', schema: QuestionSchema }])],
  controllers: [QuizzController],
  providers: [QuizzService]
})
export class QuizzModule {}
