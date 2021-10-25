import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'nest.cypgbrpc8kxg.ap-northeast-2.rds.amazonaws.com',
  port: 3306,
  username: 'admin',
  password: 'fmlskdk1',
  database: 'boardDB',
  entities: [__dirname + '/..**/*.entity.{js,ts}'],
  synchronize: true,
};
