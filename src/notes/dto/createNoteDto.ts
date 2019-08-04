import { IsString, IsDate } from 'class-validator';

export class CreateNoteDto {
  @IsString()
  readonly title: string;

  @IsString()
  readonly content: string;

  @IsDate()
  readonly createAt: Date;

  @IsDate()
  readonly updateAt: Date;
}
