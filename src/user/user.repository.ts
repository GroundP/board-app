import { AuthCredentialDto } from './../auth/dto/auth.credential.dto';
import { User } from './user.entity';
import { EntityRepository, Repository } from 'typeorm';
import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async createUser(authCredentailDto: AuthCredentialDto): Promise<void> {
    const { username, password } = authCredentailDto;
    const user = this.create({ username, password });

    try {
      await this.save(user);
    } catch (error) {
      switch (error) {
        case 23505:
          throw new ConflictException('Existing username');
        default:
          throw new InternalServerErrorException();
      }
    }
  }
}
