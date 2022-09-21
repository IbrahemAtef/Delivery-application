import {
  IsNotEmpty,
  MinLength,
  IsEmail,
  IsEnum,
  IsString,
  Matches,
} from "class-validator";
import { ROLES } from "src/common/enums";
import { MessageEnum } from "../../../common/enums";
import { PATTERN } from "../../../common/constants/";

export class SignUpDto {
  @IsNotEmpty()
  @IsString()
  userName: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(8)
  @Matches(PATTERN, { message: MessageEnum.WEAK_PASSWORD })
  password: string;

  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsNotEmpty()
  @IsEnum(ROLES, {
    message: MessageEnum.CHECK_ROLE,
  })
  role: ROLES;
}
