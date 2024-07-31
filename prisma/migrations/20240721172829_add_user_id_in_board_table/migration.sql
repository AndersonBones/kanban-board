/*
  Warnings:

  - You are about to drop the column `userEmail` on the `boards` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `boards` DROP FOREIGN KEY `boards_userEmail_fkey`;

-- AlterTable
ALTER TABLE `boards` DROP COLUMN `userEmail`,
    ADD COLUMN `userId` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `boards` ADD CONSTRAINT `boards_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
