/*
  Warnings:

  - You are about to drop the column `board_status` on the `boards` table. All the data in the column will be lost.
  - You are about to drop the column `boardId` on the `tasks` table. All the data in the column will be lost.
  - You are about to drop the column `taskStatus` on the `tasks` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `tasks` DROP FOREIGN KEY `tasks_boardId_fkey`;

-- AlterTable
ALTER TABLE `boards` DROP COLUMN `board_status`;

-- AlterTable
ALTER TABLE `tasks` DROP COLUMN `boardId`,
    DROP COLUMN `taskStatus`,
    ADD COLUMN `board_id` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `tasks` ADD CONSTRAINT `tasks_board_id_fkey` FOREIGN KEY (`board_id`) REFERENCES `boards`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
