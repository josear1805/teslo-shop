import { Type } from 'class-transformer';
import { IsOptional, IsPositive, Min } from 'class-validator';

export class PaginatioDto {
  @IsOptional()
  @IsPositive()
  @Type(() => Number) //para tranformar a numero
  limit?: number;

  @IsOptional()
  @Min(0)
  @Type(() => Number)
  offset?: number;
}
