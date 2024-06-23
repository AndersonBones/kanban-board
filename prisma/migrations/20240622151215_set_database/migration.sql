-- CreateTable
CREATE TABLE `tasks` (
    `taskId` VARCHAR(191) NOT NULL,
    `taskTitle` VARCHAR(191) NOT NULL,
    `boardId` VARCHAR(191) NOT NULL,
    `inDevId` VARCHAR(191) NOT NULL,
    `inQaId` VARCHAR(191) NOT NULL,
    `completedId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`taskId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `backlog` (
    `id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `inDev` (
    `id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `inQA` (
    `id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `completed` (
    `id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `tasks` ADD CONSTRAINT `tasks_boardId_fkey` FOREIGN KEY (`boardId`) REFERENCES `backlog`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tasks` ADD CONSTRAINT `tasks_inDevId_fkey` FOREIGN KEY (`inDevId`) REFERENCES `inDev`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tasks` ADD CONSTRAINT `tasks_inQaId_fkey` FOREIGN KEY (`inQaId`) REFERENCES `inQA`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tasks` ADD CONSTRAINT `tasks_completedId_fkey` FOREIGN KEY (`completedId`) REFERENCES `completed`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
