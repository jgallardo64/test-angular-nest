/*
  Warnings:

  - You are about to drop the column `resultId` on the `Driver` table. All the data in the column will be lost.
  - You are about to drop the column `resultId` on the `GrandPrix` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Driver" DROP CONSTRAINT "Driver_resultId_fkey";

-- DropIndex
DROP INDEX "Driver_resultId_key";

-- AlterTable
ALTER TABLE "Driver" DROP COLUMN "resultId";

-- AlterTable
ALTER TABLE "GrandPrix" DROP COLUMN "resultId";

-- AddForeignKey
ALTER TABLE "Result" ADD CONSTRAINT "Result_driverId_fkey" FOREIGN KEY ("driverId") REFERENCES "Driver"("id") ON DELETE CASCADE ON UPDATE CASCADE;
