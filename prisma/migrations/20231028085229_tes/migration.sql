-- CreateTable
CREATE TABLE `tasks` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_user` INTEGER NOT NULL,
    `task_name` VARCHAR(191) NOT NULL,
    `task_description` TEXT NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `tasks_id_user_idx`(`id_user`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `avatar` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `users_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `schools` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `school_name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NULL,
    `address` VARCHAR(191) NULL,
    `phone` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `admin_pengguna` (
    `id_admin_pengguna` INTEGER NOT NULL AUTO_INCREMENT,
    `nama` VARCHAR(191) NOT NULL,
    `peran_satker` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `admin_pengguna_email_key`(`email`),
    PRIMARY KEY (`id_admin_pengguna`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `daftar_pengguna` (
    `id_pengguna` INTEGER NOT NULL AUTO_INCREMENT,
    `nama` VARCHAR(191) NOT NULL,
    `id_satker` VARCHAR(191) NOT NULL,
    `jabatan` VARCHAR(191) NOT NULL,
    `telepon` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `aktif` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `daftar_pengguna_telepon_key`(`telepon`),
    PRIMARY KEY (`id_pengguna`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `satker` (
    `id_satker` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_satker` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_satker`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `kategori` (
    `id_kategori` INTEGER NOT NULL AUTO_INCREMENT,
    `kategori` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_kategori`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `daftar_asset` (
    `id_asset` INTEGER NOT NULL AUTO_INCREMENT,
    `id_pengguna` INTEGER NULL,
    `kode_barang` VARCHAR(191) NOT NULL,
    `id_satker` VARCHAR(191) NOT NULL,
    `nama_barang` VARCHAR(191) NOT NULL,
    `tanggal_pembelian` VARCHAR(191) NOT NULL,
    `nomer_pembelian` VARCHAR(191) NOT NULL,
    `merk_tipe` VARCHAR(191) NOT NULL,
    `lampiran` VARCHAR(191) NOT NULL,
    `sn` VARCHAR(191) NOT NULL,
    `garansi` VARCHAR(191) NOT NULL,
    `kategori` VARCHAR(191) NOT NULL,
    `spesifikasi` VARCHAR(191) NOT NULL,
    `catatan` VARCHAR(191) NOT NULL,
    `nup` VARCHAR(191) NOT NULL,
    `tgl_rekam_pertama` VARCHAR(191) NOT NULL,
    `tgl_perolehan` VARCHAR(191) NOT NULL,
    `nilai_perolehan_pertama` VARCHAR(191) NOT NULL,
    `nilai_mutasi` VARCHAR(191) NOT NULL,
    `nilai_perolehan` VARCHAR(191) NOT NULL,
    `nilai_penyusutan` VARCHAR(191) NOT NULL,
    `nilai_buku` VARCHAR(191) NOT NULL,
    `kuantitas` VARCHAR(191) NOT NULL,
    `jml_foto` VARCHAR(191) NOT NULL,
    `status_penggunaan` VARCHAR(191) NOT NULL,
    `no_psp` VARCHAR(191) NOT NULL,
    `tgl_psp` VARCHAR(191) NOT NULL,
    `create_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `daftar_asset_id_pengguna_idx`(`id_pengguna`),
    PRIMARY KEY (`id_asset`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `riwayat_asset` (
    `id_riwayat` INTEGER NOT NULL AUTO_INCREMENT,
    `kode_barang` VARCHAR(191) NOT NULL,
    `nama_barang` VARCHAR(191) NOT NULL,
    `kategori` VARCHAR(191) NOT NULL,
    `id_satker` VARCHAR(191) NOT NULL,
    `id_pengguna` INTEGER NULL,
    `status` VARCHAR(191) NOT NULL,
    `kondisi` VARCHAR(191) NULL,
    `tanda_tangan` VARCHAR(191) NOT NULL,
    `catatan` VARCHAR(191) NOT NULL,
    `create_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `tgl` VARCHAR(191) NULL,

    INDEX `riwayat_asset_id_pengguna_idx`(`id_pengguna`),
    PRIMARY KEY (`id_riwayat`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `daftar_asset_temporary` (
    `id_asset_temporary` INTEGER NOT NULL AUTO_INCREMENT,
    `id_pengguna` INTEGER NULL,
    `id_group` VARCHAR(191) NOT NULL,
    `kode_barang` VARCHAR(191) NOT NULL,
    `id_satker` VARCHAR(191) NOT NULL,
    `nama_barang` VARCHAR(191) NOT NULL,
    `tanggal_pembelian` VARCHAR(191) NOT NULL,
    `nomer_pembelian` VARCHAR(191) NOT NULL,
    `merk_tipe` VARCHAR(191) NOT NULL,
    `lampiran` VARCHAR(191) NOT NULL,
    `sn` VARCHAR(191) NOT NULL,
    `garansi` VARCHAR(191) NOT NULL,
    `kategori` VARCHAR(191) NOT NULL,
    `spesifikasi` VARCHAR(191) NOT NULL,
    `catatan` VARCHAR(191) NOT NULL,
    `nup` VARCHAR(191) NOT NULL,
    `tgl_rekam_pertama` VARCHAR(191) NOT NULL,
    `tgl_perolehan` VARCHAR(191) NOT NULL,
    `nilai_perolehan_pertama` VARCHAR(191) NOT NULL,
    `nilai_mutasi` VARCHAR(191) NOT NULL,
    `nilai_perolehan` VARCHAR(191) NOT NULL,
    `nilai_penyusutan` VARCHAR(191) NOT NULL,
    `nilai_buku` VARCHAR(191) NOT NULL,
    `kuantitas` VARCHAR(191) NOT NULL,
    `jml_foto` VARCHAR(191) NOT NULL,
    `status_penggunaan` VARCHAR(191) NOT NULL,
    `no_psp` VARCHAR(191) NOT NULL,
    `tgl_psp` VARCHAR(191) NOT NULL,
    `create_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id_asset_temporary`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `riwayat_asset_temporary` (
    `id_riwayat_temporary` INTEGER NOT NULL AUTO_INCREMENT,
    `id_group` VARCHAR(191) NOT NULL,
    `kode_barang` VARCHAR(191) NOT NULL,
    `nama_barang` VARCHAR(191) NOT NULL,
    `kategori` VARCHAR(191) NOT NULL,
    `id_satker` VARCHAR(191) NOT NULL,
    `id_pengguna` INTEGER NULL,
    `status` VARCHAR(191) NOT NULL,
    `tanda_tangan` VARCHAR(191) NOT NULL,
    `catatan` VARCHAR(191) NOT NULL,
    `kondisi` VARCHAR(191) NULL,
    `create_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id_riwayat_temporary`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
