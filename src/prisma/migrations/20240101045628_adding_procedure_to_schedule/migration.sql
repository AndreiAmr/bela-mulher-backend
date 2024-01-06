/*
  Warnings:

  - Made the column `clientId` on table `Schedule` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Schedule" DROP CONSTRAINT "Schedule_clientId_fkey";

-- AlterTable
ALTER TABLE "Schedule" ADD COLUMN     "procedureId" TEXT,
ALTER COLUMN "clientId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Schedule" ADD CONSTRAINT "Schedule_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Schedule" ADD CONSTRAINT "Schedule_procedureId_fkey" FOREIGN KEY ("procedureId") REFERENCES "Procedures"("id") ON DELETE SET NULL ON UPDATE CASCADE;
