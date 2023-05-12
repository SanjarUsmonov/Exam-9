import {  IsNumber, IsString, IsUrl, } from "class-validator"
import { DataDTO } from './create-auth.dto';

export class DataUpdateDTO extends DataDTO {
    @IsNumber()
    sell:string;
    
    @IsNumber()
    buy:string;

    @IsUrl()
    url:string;

    @IsString()
    picture:string;
}
