/*
  Warnings:

  - Added the required column `extension` to the `Model` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fileName` to the `Model` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `model` ADD COLUMN `extension` VARCHAR(191) NOT NULL,
    ADD COLUMN `fileName` VARCHAR(191) NOT NULL;
