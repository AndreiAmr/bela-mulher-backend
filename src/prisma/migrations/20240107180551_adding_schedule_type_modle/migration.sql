/*
  Warnings:

  - Added the required column `scheduleTypeId` to the `Schedule` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Schedule" ADD COLUMN     "scheduleTypeId" TEXT NOT NULL,
ALTER COLUMN "statusId" DROP DEFAULT;

-- CreateTable
CREATE TABLE "ScheduleType" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "ScheduleType_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Schedule" ADD CONSTRAINT "Schedule_scheduleTypeId_fkey" FOREIGN KEY ("scheduleTypeId") REFERENCES "ScheduleType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
