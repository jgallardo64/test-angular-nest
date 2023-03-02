-- CreateTable
CREATE TABLE "Driver" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR NOT NULL,
    "image" VARCHAR NOT NULL,
    "teamId" INTEGER NOT NULL,
    "resultId" INTEGER NOT NULL,

    CONSTRAINT "Driver_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Team" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR NOT NULL,
    "image" VARCHAR NOT NULL,

    CONSTRAINT "Team_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Track" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR NOT NULL,
    "firstGp" INTEGER NOT NULL,
    "laps" INTEGER NOT NULL,
    "length" INTEGER NOT NULL,
    "raceDistance" INTEGER NOT NULL,
    "lapRecord" VARCHAR NOT NULL,
    "grandPrixId" INTEGER NOT NULL,

    CONSTRAINT "Track_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Calendar" (
    "id" SERIAL NOT NULL,
    "date" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "trackId" INTEGER NOT NULL,

    CONSTRAINT "Calendar_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GrandPrix" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "trackId" INTEGER,
    "resultId" INTEGER NOT NULL,

    CONSTRAINT "GrandPrix_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Result" (
    "id" SERIAL NOT NULL,
    "pos" INTEGER NOT NULL,
    "tyre" VARCHAR NOT NULL,
    "gap" INTEGER NOT NULL,
    "bestLap" INTEGER NOT NULL,
    "pitstops" INTEGER NOT NULL,
    "penGame" INTEGER NOT NULL,
    "penStewards" INTEGER NOT NULL,
    "points" INTEGER NOT NULL,
    "gridPos" INTEGER NOT NULL,
    "status" VARCHAR NOT NULL,
    "session" VARCHAR NOT NULL,
    "grandPrixId" INTEGER NOT NULL,
    "driverId" INTEGER,

    CONSTRAINT "Result_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Driver_resultId_key" ON "Driver"("resultId");

-- CreateIndex
CREATE UNIQUE INDEX "Track_grandPrixId_key" ON "Track"("grandPrixId");

-- AddForeignKey
ALTER TABLE "Driver" ADD CONSTRAINT "Driver_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Driver" ADD CONSTRAINT "Driver_resultId_fkey" FOREIGN KEY ("resultId") REFERENCES "Result"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Track" ADD CONSTRAINT "Track_grandPrixId_fkey" FOREIGN KEY ("grandPrixId") REFERENCES "GrandPrix"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Result" ADD CONSTRAINT "Result_grandPrixId_fkey" FOREIGN KEY ("grandPrixId") REFERENCES "GrandPrix"("id") ON DELETE CASCADE ON UPDATE CASCADE;
