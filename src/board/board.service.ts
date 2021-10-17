import { Board } from './board.model';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BoardService {
  private boards: Board[]; // DB 대신 임시 메모리 데이터

  getAllBoards() {
    return this.boards;
    //return 'getAllBoards';
  }
  async getBoard(param) {
    console.log(param);
    return 'getBoard';
  }
  async createBoard(body, param) {
    console.log(body);
    console.log(param);
    return 'createBoard';
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
