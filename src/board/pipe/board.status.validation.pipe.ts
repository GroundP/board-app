import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class BoardStatusValidationPipe implements PipeTransform {
  transform(value: string) {
    console.log(value);
    if (value !== 'PUBLIC' && value !== 'PRIVATE') {
      throw new BadRequestException('status should be PUBLIC or PRIVATE');
    }
    return value;
  }
}
