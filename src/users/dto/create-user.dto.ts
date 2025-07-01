import { IsEnum, IsString, IsNotEmpty } from "class-validator";

export class CreateUserDto{
    @IsString()
    @IsNotEmpty({ message: 'Name is required' })
    name: string;

    @IsEnum(['ADMIN', 'USER'], {
        message: 'Role must be either ADMIN or USER',
    })
    role: 'ADMIN' | 'USER';
    // You can add more properties as needed
}