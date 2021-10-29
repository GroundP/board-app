import { CreateBoardDto } from './../dto/create.board.dto';
import { EntityRepository, Repository } from 'typeorm';
import { Board } from '../entity/board.entity';
import { BoardStatus } from '../board.status';

@EntityRepository(Board)
export class BoardRepository extends Repository<Board> {
  async createBoard(createBoardDto: CreateBoardDto) {
    const { title, description } = createBoardDto;
    const newBoard = this.create({
      title,
      description,
      status: BoardStatus.PUBLIC,
    });

    await this.save(newBoard);
    return newBoard;
  }
}
