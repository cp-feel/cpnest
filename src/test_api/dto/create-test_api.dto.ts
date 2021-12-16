import { IsNumber, IsString } from 'class-validator';

export class CreateApiuserDto {
  @IsNumber()
  readonly id: number;
  @IsString()
  readonly firstName: string;
  @IsString()
  readonly lastName: string;
}
