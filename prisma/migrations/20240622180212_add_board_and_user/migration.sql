/*
  Warnings:

  - You are about to drop the `tasks` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `inDevTasksTaskId` to the `inDev` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `tasks` DROP FOREIGN KEY `tasks_boardId_fkey`;

-- DropForeignKey
ALTER TABLE `tasks` DROP FOREIGN KEY `tasks_completedId_fkey`;

-- DropForeignKey
ALTER TABLE `tasks` DROP FOREIGN KEY `tasks_inDevId_fkey`;

-- DropForeignKey
ALTER TABLE `tasks` DROP FOREIGN KEY `tasks_inQaId_fkey`;

-- AlterTable
ALTER TABLE `backlog` ADD COLUMN `boardId` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `completed` ADD COLUMN `boardId` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `indev` ADD COLUMN `boardId` VARCHAR(191) NULL,
    ADD COLUMN `inDevTasksTaskId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `inqa` ADD COLUMN `boardId` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `tasks`;

-- CreateTable
CREATE TABLE `User` (
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `refreshToken` VARCHAR(191) NULL,
    `boardId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    UNIQUE INDEX `User_password_key`(`password`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `backlogTasks` (
    `taskId` VARCHAR(191) NOT NULL,
    `taskTitle` VARCHAR(191) NOT NULL,
    `backlogId` VARCHAR(191) NULL,

    PRIMARY KEY (`taskId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `inDevTasks` (
    `taskId` VARCHAR(191) NOT NULL,
    `taskTitle` VARCHAR(191) NOT NULL,
    `inDevId` VARCHAR(191) NULL,

    PRIMARY KEY (`taskId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `inQaTasks` (
    `taskId` VARCHAR(191) NOT NULL,
    `taskTitle` VARCHAR(191) NOT NULL,
    `inQAId` VARCHAR(191) NULL,

    PRIMARY KEY (`taskId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `completedTasks` (
    `taskId` VARCHAR(191) NOT NULL,
    `taskTitle` VARCHAR(191) NOT NULL,
    `completedId` VARCHAR(191) NULL,

    PRIMARY KEY (`taskId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Board` (
    `id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_boardId_fkey` FOREIGN KEY (`boardId`) REFERENCES `Board`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `backlogTasks` ADD CONSTRAINT `backlogTasks_backlogId_fkey` FOREIGN KEY (`backlogId`) REFERENCES `backlog`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `backlog` ADD CONSTRAINT `backlog_boardId_fkey` FOREIGN KEY (`boardId`) REFERENCES `Board`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `inDevTasks` ADD CONSTRAINT `inDevTasks_inDevId_fkey` FOREIGN KEY (`inDevId`) REFERENCES `inDev`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `inDev` ADD CONSTRAINT `inDev_boardId_fkey` FOREIGN KEY (`boardId`) REFERENCES `Board`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `inQaTasks` ADD CONSTRAINT `inQaTasks_inQAId_fkey` FOREIGN KEY (`inQAId`) REFERENCES `inQA`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `inQA` ADD CONSTRAINT `inQA_boardId_fkey` FOREIGN KEY (`boardId`) REFERENCES `Board`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `completedTasks` ADD CONSTRAINT `completedTasks_completedId_fkey` FOREIGN KEY (`completedId`) REFERENCES `completed`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `completed` ADD CONSTRAINT `completed_boardId_fkey` FOREIGN KEY (`boardId`) REFERENCES `Board`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
