import {  IsNotEmpty, IsNumberString, IsString, IsUrl, } from "class-validator"

export class DataDTO {
    @IsNumberString()
    @IsNotEmpty()
    sell:string;
    
    @IsNumberString()
    @IsNotEmpty()
    buy:string;

    @IsUrl()
    @IsNotEmpty()
    url:string;

}
