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
import { CreateBoardDto } from './dto/create.board.dto';

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
  deleteBoard(@Param() param) {
    return this.boardService.deleteBoard(param);
  }

  @Put(':id')
  updateBoard(@Body() body, @Param() param) {
    return this.boardService.updateBoard(body, param);
  }
}
