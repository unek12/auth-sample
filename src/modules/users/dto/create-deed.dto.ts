import { IsNotEmpty } from 'class-validator';

export class CreateDeedDto {
  @IsNotEmpty()
  title: string;
  @IsNotEmpty()
  description: string;
}
