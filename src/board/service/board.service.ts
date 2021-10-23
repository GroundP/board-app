import { CreateBoardDto } from '../dto/create.board.dto';
import { Board, BoardStatus } from '../model/board.model';
import { Injectable, NotFoundException } from '@nestjs/common';
import { v1 as uuid } from 'uuid';

@Injectable()
export class BoardService {
  private boards: Board[] = []; // DB 대신 임시 메모리 데이터

  getAllBoards(): Board[] {
    return this.boards;
    //return 'getAllBoards';
  }

  getBoardById(id): Board {
    console.log(id);

    const boardById = this.boards.find((elem) => {
      return elem.id === id;
    });

    if (!boardById)
      throw new NotFoundException(`Can't find Board with id ${id}`);

    return boardById;
  }

  createBoard(createBoardDto: CreateBoardDto) {
    console.log(createBoardDto.title);
    console.log(createBoardDto.description);

    const { title, description, status } = createBoardDto;
    const newBoard: Board = {
      id: uuid(),
      title,
      description,
      status: status == 'PUBLIC' ? BoardStatus.PUBLIC : BoardStatus.PRIVATE,
    };

    this.boards.push(newBoard);
    return newBoard;
  }

  deleteBoard(id: string): Board {
    console.log(id);
    const boardById = this.getBoardById(id); // 없는 id라면 getBoardById안에 예외처리 있으므로 여기선 따로 처리 안함
    this.boards = this.boards.filter((elem) => {
      return elem.id !== boardById.id;
    });

    return boardById;
  }

  updateBoard(id: string, createBoardDto: CreateBoardDto): Board {
    console.log(id);
    console.log(createBoardDto);

    const boardById = this.getBoardById(id);

    const { title, description } = createBoardDto;

    boardById.title = title;
    boardById.description = description;

    return boardById;
  }
}
