import { IsAlphanumeric, IsString, MaxLength } from "class-validator"

export class LoginDTO {
    @IsAlphanumeric()
    @MaxLength(32)
    username:string;

    @IsString()
    @MaxLength(32)
    password:string;
}
