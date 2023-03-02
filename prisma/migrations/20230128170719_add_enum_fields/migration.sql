/*
  Warnings:

  - The `tyre` column on the `Result` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `status` on the `Result` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Tyre" AS ENUM ('SOFT', 'MEDIUM', 'HARD');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('FINISHED');

-- AlterTable
ALTER TABLE "Result" DROP COLUMN "tyre",
ADD COLUMN     "tyre" "Tyre",
DROP COLUMN "status",
ADD COLUMN     "status" "Status" NOT NULL;
