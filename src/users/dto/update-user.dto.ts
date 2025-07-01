import { CreateUserDto } from "./create-user.dto";
import { PartialType } from "@nestjs/mapped-types";


export class UpdateUserDto extends PartialType(CreateUserDto) {}
// This class extends CreateUserDto and makes all its properties optional
// using PartialType from @nestjs/mapped-types.
// This is useful for update operations where you may not want to provide all fields.