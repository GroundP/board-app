import { CreateBoardDto } from './dto/create.board.dto';
import { Board, BoardStatus } from './board.model';
import { Injectable } from '@nestjs/common';
import { v1 as uuid } from 'uuid';

@Injectable()
export class BoardService {
  private boards: Board[] = []; // DB 대신 임시 메모리 데이터

  getAllBoards(): Board[] {
    return this.boards;
    //return 'getAllBoards';
  }

  async getBoard(id) {
    let boardFromId;
    this.boards.forEach((elem) => {
      if (elem.id === id) boardFromId = elem;
    });

    console.log(id);
    return 'getBoard';
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
    //const newBoard: Board = new Board();
    //newBoard.id = uuid();
    //newBoard.title = title;
    //newBoard.description = description;
    //newBoard.status = BoardStatus.PUBLIC;
    //
    this.boards.push(newBoard);
    return newBoard;
  }

  async deleteBoard(param) {
    console.log(param);
    return 'deleteBoard';
  }
  async updateBoard(body, param) {
    console.log(body);
    console.log(param);
    return 'updateBoard';
  }
}
