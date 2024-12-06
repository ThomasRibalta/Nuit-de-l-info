import { QuizzSchema } from './schema/quizz.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { QuizzController } from './quizz.controller';
import { QuizzService } from './quizz.service';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Quizz', schema: QuizzSchema }]),
    UsersModule,
  ],
  controllers: [QuizzController],
  providers: [QuizzService],
})
export class QuizzModule {}
