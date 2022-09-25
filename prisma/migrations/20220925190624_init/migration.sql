/*
  Warnings:

  - You are about to drop the column `extension` on the `model` table. All the data in the column will be lost.
  - You are about to drop the column `path` on the `model` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `model` DROP COLUMN `extension`,
    DROP COLUMN `path`;
