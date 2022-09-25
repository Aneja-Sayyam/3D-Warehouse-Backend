/*
  Warnings:

  - You are about to drop the column `path` on the `model` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[id]` on the table `Model` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `model` DROP COLUMN `path`;

-- CreateIndex
CREATE UNIQUE INDEX `Model_id_key` ON `Model`(`id`);
