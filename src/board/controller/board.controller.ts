import { Board } from '../model/board.model';
import { BoardService } from '../service/board.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateBoardDto } from '../dto/create.board.dto';

@Controller('board')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @Get()
  getAllBoards(): Board[] {
    return this.boardService.getAllBoards();
  }

  @Get(':id')
  getBoard(@Param('id') id) {
    return this.boardService.getBoard(id);
  }

  @Post()
  createBoard(@Body() createBoardDto: CreateBoardDto): Board {
    return this.boardService.createBoard(createBoardDto);
  }

  @Delete(':id')
  deleteBoard(@Param('id') id: string) {
    return this.boardService.deleteBoard(id);
  }

  @Put(':id')
  updateBoard(@Param('id') id: string, @Body() createBoardDto: CreateBoardDto) {
    return this.boardService.updateBoard(id, createBoardDto);
  }
}
