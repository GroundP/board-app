import { CreateBoardDto } from '../dto/create.board.dto';
import { Board, BoardStatus } from '../model/board.model';
import { Injectable } from '@nestjs/common';
import { v1 as uuid } from 'uuid';

@Injectable()
export class BoardService {
  private boards: Board[] = []; // DB 대신 임시 메모리 데이터

  getAllBoards(): Board[] {
    return this.boards;
    //return 'getAllBoards';
  }

  getBoard(id: string): Board {
    console.log(id);

    return this.boards.find((elem) => {
      return elem.id === id;
    });
  }

  createBoard(createBoardDto: CreateBoardDto) {
    console.log(createBoardDto.title);
    console.log(createBoardDto.description);

    const { title, description } = createBoardDto;
    const newBoard: Board = {
      id: uuid(),
      title,
      description,
      status: BoardStatus.PUBLIC,
    };

    this.boards.push(newBoard);
    return newBoard;
  }

  deleteBoard(id: string): string {
    console.log(id);
    this.boards = this.boards.filter((elem) => {
      return elem.id !== id;
    });

    return id;
  }

  updateBoard(id: string, createBoardDto: CreateBoardDto): Board {
    console.log(id);
    console.log(createBoardDto);

    const boardById = this.getBoard(id);

    const { title, description } = createBoardDto;

    boardById.title = title;
    boardById.description = description;

    return boardById;
  }
}
