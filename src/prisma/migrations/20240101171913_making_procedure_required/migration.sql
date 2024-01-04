/*
  Warnings:

  - Made the column `procedureId` on table `Schedule` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Schedule" DROP CONSTRAINT "Schedule_procedureId_fkey";

-- AlterTable
ALTER TABLE "Schedule" ALTER COLUMN "procedureId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Schedule" ADD CONSTRAINT "Schedule_procedureId_fkey" FOREIGN KEY ("procedureId") REFERENCES "Procedures"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
