import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateRiwayatAssetTemporaryDto {

    @IsString()
    @IsNotEmpty()
    id_group: string;

    @IsString()
    @IsNotEmpty()
    kode_barang: string;

    @IsString()
    @IsNotEmpty()
    item_name: string;

    @IsString()
    @IsNotEmpty()
    category: string;

    @IsString()
    @IsNotEmpty()
    id_satker: string;

    @IsOptional()
    id_pengguna?: number;

    @IsString()
    @IsNotEmpty()
    status: string;

    @IsString()
    @IsOptional()
    kondisi?: string;

    @IsString()
    @IsNotEmpty()
    tanda_tangan: string;

    @IsString()
    @IsOptional()
    catatan: string;
}
