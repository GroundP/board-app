import { BoardRepository } from './../repository/board.repository';
import { CreateBoardDto } from '../dto/create.board.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { v1 as uuid } from 'uuid';
import { Board } from '../entity/board.entity';
import { BoardStatus } from '../board.status';

@Injectable()
export class BoardService {
  constructor(private readonly boardRepository: BoardRepository) {}

  async getAllBoards(): Promise<Board[]> {
    const data = this.boardRepository.find();
    return data;
  }

  async getBoardById(id): Promise<Board> {
    console.log(id);

    const found = await this.boardRepository.findOne(id);

    if (!found) {
      throw new NotFoundException(`Can't find Board with id ${id}`);
    }

    return found;
  }

  async createBoard(createBoardDto: CreateBoardDto): Promise<Board> {
    return this.boardRepository.createBoard(createBoardDto);
  }

  async deleteBoard(id: string): Promise<Board> {
    const board = this.getBoardById(id);
    await this.boardRepository.delete(id);
    return board;
  }

  async updateBoard(
    id: string,
    createBoardDto: CreateBoardDto,
  ): Promise<Board> {
    const boardById = await this.getBoardById(id);
    const { title, description } = createBoardDto;

    boardById.title = title;
    boardById.description = description;

    await this.boardRepository.save(boardById);

    return boardById;
  }
}
