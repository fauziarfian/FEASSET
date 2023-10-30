import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateDaftarPenggunaDto {

    @IsString()
    @IsOptional()
    nama: string;

    @IsString()
    @IsOptional()
    id_satker: string;

    @IsString()
    @IsOptional()
    jabatan: string;

    @IsString()
    @IsOptional()
    telepon: string;

    @IsString()
    @IsOptional()
    aktif: string;


}
