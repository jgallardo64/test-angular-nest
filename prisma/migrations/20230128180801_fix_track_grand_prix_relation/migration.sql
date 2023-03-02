/*
  Warnings:

  - You are about to drop the column `grandPrixId` on the `Track` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Track" DROP CONSTRAINT "Track_grandPrixId_fkey";

-- DropIndex
DROP INDEX "Track_grandPrixId_key";

-- AlterTable
ALTER TABLE "Track" DROP COLUMN "grandPrixId";

-- AddForeignKey
ALTER TABLE "GrandPrix" ADD CONSTRAINT "GrandPrix_trackId_fkey" FOREIGN KEY ("trackId") REFERENCES "Track"("id") ON DELETE CASCADE ON UPDATE CASCADE;
