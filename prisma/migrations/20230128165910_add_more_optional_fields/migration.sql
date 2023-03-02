/*
  Warnings:

  - Changed the type of `session` on the `Result` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Session" AS ENUM ('QUALIFYING', 'SPRINT', 'RACE');

-- AlterTable
ALTER TABLE "GrandPrix" ALTER COLUMN "resultId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Result" DROP COLUMN "session",
ADD COLUMN     "session" "Session" NOT NULL;

-- AlterTable
ALTER TABLE "Track" ALTER COLUMN "grandPrixId" DROP NOT NULL;
