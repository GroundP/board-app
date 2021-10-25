import { BoardRepository } from './repository/board.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { BoardController } from './controller/board.controller';
import { BoardService } from './service/board.service';

@Module({
  imports: [TypeOrmModule.forFeature([BoardRepository])],
  controllers: [BoardController],
  providers: [BoardService],
})
export class BoardModule {}
