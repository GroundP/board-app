import { AuthCredentialDto } from './../auth/dto/auth.credential.dto';
import { User } from './entity/user.entity';
import { EntityRepository, Repository } from 'typeorm';
import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async createUser(authCredentailDto: AuthCredentialDto): Promise<void> {
    const { username, password } = authCredentailDto;
    const salt = await bcrypt.genSalt();
    console.log(salt);

    const hashedPassword = await bcrypt.hash(password, salt);
    console.log('hashedPassword', hashedPassword);

    const user = new User();
    user.username = username;
    user.password = hashedPassword;

    //const user = this.create({ username, password });

    try {
      //await this.save(user);
      await user.save();
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
