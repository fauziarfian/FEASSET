import { IsInt, IsNotEmpty, IsOptional, IsString, Min } from "class-validator";

export class CreateDaftarAssetDto {

 
    @IsString()
    @IsNotEmpty()
    kode_barang: string;

    @IsOptional()
    id_pengguna?: number;

    @IsString()
    @IsNotEmpty()
    id_satker: string;

    @IsString()
    @IsNotEmpty()
    nama_barang: string;

    @IsString()
    @IsNotEmpty()
    tanggal_pembelian: string;

    @IsString()
    @IsNotEmpty()
    nomer_pembelian: string;

    @IsString()
    @IsNotEmpty()
    merk_tipe: string;

    @IsString()
    @IsOptional()
    lampiran: string;

    @IsString()
    @IsNotEmpty()
    sn: string;

    @IsString()
    @IsNotEmpty()
    garansi: string;

    @IsString()
    @IsNotEmpty()
    kategori: string;

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    spesifikasi: string;

    @IsString()
    @IsOptional()
    catatan: string;


    // create dto khusus pemerintahan

    @IsString()
    @IsOptional()
    nup: string;

    @IsString()
    @IsOptional()
    tgl_rekam_pertama: string;

    @IsString()
    @IsOptional()
    tgl_perolehan: string;

    @IsString()
    @IsOptional()
    nilai_perolehan_pertama: string;

    @IsString()
    @IsOptional()
    nilai_mutasi: string;

    @IsString()
    @IsOptional()
    nilai_perolehan: string;

    @IsString()
    @IsOptional()
    nilai_penyusutan: string;

    @IsString()
    @IsOptional()
    nilai_buku: string;

    @IsString()
    @IsOptional()
    kuantitas: string;

    @IsString()
    @IsOptional()
    jml_foto: string;

    @IsString()
    @IsOptional()
    status_penggunaan: string;

    @IsString()
    @IsOptional()
    no_psp: string;

    @IsString()
    @IsOptional()
    tgl_psp: string;


}
