/*
  Warnings:

  - You are about to drop the `backlog` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `backlogtasks` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `board` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `completed` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `completedtasks` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `indev` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `indevtasks` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `inqa` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `inqatasks` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `backlog` DROP FOREIGN KEY `backlog_boardId_fkey`;

-- DropForeignKey
ALTER TABLE `backlogtasks` DROP FOREIGN KEY `backlogTasks_backlogId_fkey`;

-- DropForeignKey
ALTER TABLE `completed` DROP FOREIGN KEY `completed_boardId_fkey`;

-- DropForeignKey
ALTER TABLE `completedtasks` DROP FOREIGN KEY `completedTasks_completedId_fkey`;

-- DropForeignKey
ALTER TABLE `indev` DROP FOREIGN KEY `inDev_boardId_fkey`;

-- DropForeignKey
ALTER TABLE `indevtasks` DROP FOREIGN KEY `inDevTasks_inDevId_fkey`;

-- DropForeignKey
ALTER TABLE `inqa` DROP FOREIGN KEY `inQA_boardId_fkey`;

-- DropForeignKey
ALTER TABLE `inqatasks` DROP FOREIGN KEY `inQaTasks_inQAId_fkey`;

-- DropForeignKey
ALTER TABLE `user` DROP FOREIGN KEY `User_boardId_fkey`;

-- DropTable
DROP TABLE `backlog`;

-- DropTable
DROP TABLE `backlogtasks`;

-- DropTable
DROP TABLE `board`;

-- DropTable
DROP TABLE `completed`;

-- DropTable
DROP TABLE `completedtasks`;

-- DropTable
DROP TABLE `indev`;

-- DropTable
DROP TABLE `indevtasks`;

-- DropTable
DROP TABLE `inqa`;

-- DropTable
DROP TABLE `inqatasks`;

-- DropTable
DROP TABLE `user`;

-- CreateTable
CREATE TABLE `users` (
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `refreshToken` VARCHAR(191) NULL,

    UNIQUE INDEX `users_email_key`(`email`),
    UNIQUE INDEX `users_password_key`(`password`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tasks` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `taskStatus` VARCHAR(191) NOT NULL,
    `boardId` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `boards` (
    `id` VARCHAR(191) NOT NULL,
    `boardStatus` VARCHAR(191) NOT NULL,
    `boardName` VARCHAR(191) NOT NULL,
    `color` VARCHAR(191) NOT NULL,
    `userEmail` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `tasks` ADD CONSTRAINT `tasks_boardId_fkey` FOREIGN KEY (`boardId`) REFERENCES `boards`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `boards` ADD CONSTRAINT `boards_userEmail_fkey` FOREIGN KEY (`userEmail`) REFERENCES `users`(`email`) ON DELETE SET NULL ON UPDATE CASCADE;
