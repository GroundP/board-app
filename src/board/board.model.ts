export enum BoardStatus {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
}
export class Board {
  id: string;
  title: string;
  description: string;
  status: BoardStatus;
}
