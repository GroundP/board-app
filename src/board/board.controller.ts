import { Board } from './board.model';
import { BoardService } from './board.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('board')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @Get()
  getAllBoards(): Board[] {
    return this.boardService.getAllBoards();
  }

  @Get(':id')
  getBoard(@Param() param) {
    return this.boardService.getBoard(param);
  }

  @Post(':id')
  createBoard(@Body() body, @Param() param) {
    return this.boardService.createBoard(body, param);
  }

  @Delete(':id')
  deleteBoard(@Param() param) {
    return this.boardService.deleteBoard(param);
  }

  @Put(':id')
  updateBoard(@Body() body, @Param() param) {
    return this.boardService.updateBoard(body, param);
  }
}
