import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateKategoriDto {

    @IsString()
    @IsNotEmpty()
    kategori: string;


}
