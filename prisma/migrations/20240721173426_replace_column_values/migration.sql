/*
  Warnings:

  - You are about to drop the column `boardName` on the `boards` table. All the data in the column will be lost.
  - You are about to drop the column `boardStatus` on the `boards` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `boards` table. All the data in the column will be lost.
  - You are about to drop the column `refreshToken` on the `users` table. All the data in the column will be lost.
  - Added the required column `board_status` to the `boards` table without a default value. This is not possible if the table is not empty.
  - Added the required column `board_title` to the `boards` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `boards` DROP FOREIGN KEY `boards_userId_fkey`;

-- AlterTable
ALTER TABLE `boards` DROP COLUMN `boardName`,
    DROP COLUMN `boardStatus`,
    DROP COLUMN `userId`,
    ADD COLUMN `board_status` VARCHAR(191) NOT NULL,
    ADD COLUMN `board_title` VARCHAR(191) NOT NULL,
    ADD COLUMN `user_id` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `users` DROP COLUMN `refreshToken`,
    ADD COLUMN `refresh_token` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `boards` ADD CONSTRAINT `boards_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
