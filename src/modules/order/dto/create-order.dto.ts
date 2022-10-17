import {
  IsLatitude,
  IsLongitude,
  IsNotEmpty,
  IsNumber,
  IsString,
} from "class-validator";

export class CreateOrderDto {
  @IsNotEmpty()
  @IsLatitude()
  latitude: number;

  @IsNotEmpty()
  @IsLongitude()
  longitude: number;

  @IsString()
  @IsNotEmpty()
  order: string;

  @IsNumber()
  @IsNotEmpty()
  quantity: number;
}
