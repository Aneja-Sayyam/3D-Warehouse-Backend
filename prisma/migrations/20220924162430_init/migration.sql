/*
  Warnings:

  - You are about to drop the column `extension` on the `model` table. All the data in the column will be lost.
  - Added the required column `path` to the `Model` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `model` DROP COLUMN `extension`,
    ADD COLUMN `path` VARCHAR(191) NOT NULL;
