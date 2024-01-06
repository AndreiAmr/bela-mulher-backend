/*
  Warnings:

  - Added the required column `userId` to the `Procedures` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Procedures" ADD COLUMN     "userId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Procedures" ADD CONSTRAINT "Procedures_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
