import { IsNotEmpty, IsNumber, IsString, Max, MinLength } from 'class-validator';

export class createUser {
  @IsString()
  @MinLength(1)
  id: string;
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsNumber()
  @Max(110)
  year: number;
}
