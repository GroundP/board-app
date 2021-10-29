import { BoardStatusValidationPipe } from './../pipe/board.status.validation.pipe';
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
  ValidationPipe,
} from '@nestjs/common';
import { CreateBoardDto } from '../dto/create.board.dto';
import { Board } from '../entity/board.entity';

@Controller('board')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @Get()
  getAllBoards(): Promise<Board[]> {
    return this.boardService.getAllBoards();
  }

  @Get(':id')
  getBoard(@Param('id', ParseIntPipe) id: number): Promise<Board> {
    return this.boardService.getBoardById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createBoard(
    @Body() createBoardDto: CreateBoardDto,
    @Body('status', BoardStatusValidationPipe) status,
  ): Promise<Board> {
    return this.boardService.createBoard(createBoardDto);
  }

  @Delete(':id')
  deleteBoard(@Param('id') id: string): Promise<Board> {
    return this.boardService.deleteBoard(id);
  }

  @Put(':id')
  updateBoard(
    @Param('id') id: string,
    @Body() createBoardDto: CreateBoardDto,
  ): Promise<Board> {
    return this.boardService.updateBoard(id, createBoardDto);
  }
}
