import { BoardStatusValidationPipe } from './../pipe/board.status.validation.pipe';
import { Board } from '../model/board.model';
import { BoardService } from '../service/board.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UsePipes,
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
  getBoard(@Param('id', ParseIntPipe) id: number) {
    return this.boardService.getBoardById(id);
  }

  @Post()
  createBoard(
    @Body() createBoardDto: CreateBoardDto,
    @Body('status', BoardStatusValidationPipe) status,
  ): Board {
    console.log(status);
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
