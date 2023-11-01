/*
  Warnings:

  - You are about to drop the column `Type` on the `Enclosure` table. All the data in the column will be lost.
  - You are about to drop the column `CNPJ` on the `Farm` table. All the data in the column will be lost.
  - Added the required column `type` to the `Enclosure` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cnpj` to the `Farm` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Enclosure" DROP COLUMN "Type",
ADD COLUMN     "type" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Farm" DROP COLUMN "CNPJ",
ADD COLUMN     "cnpj" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Batch" (
    "id" SERIAL NOT NULL,
    "enclosureId" INTEGER NOT NULL,
    "name" TEXT,
    "wheightAverage" DOUBLE PRECISION NOT NULL,
    "animalQuantity" INTEGER NOT NULL,
    "earringStartNumber" INTEGER,
    "breed" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "bornDate" TIMESTAMP(3) NOT NULL,
    "observation" TEXT,
    "situation" TEXT NOT NULL,

    CONSTRAINT "Batch_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Animal" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "number" INTEGER,
    "sex" TEXT,
    "breed" TEXT NOT NULL,
    "bornDate" TIMESTAMP(3),
    "bornWheight" DOUBLE PRECISION,
    "entryDate" TIMESTAMP(3) NOT NULL,
    "entryWheight" DOUBLE PRECISION,
    "weaningDate" TIMESTAMP(3),
    "fitnessDate" TIMESTAMP(3),
    "type" TEXT,
    "weight" DOUBLE PRECISION,
    "status" TEXT,
    "category" TEXT,
    "prefix" TEXT,
    "suffix" TEXT,
    "enclosureId" INTEGER,
    "batchId" INTEGER,

    CONSTRAINT "Animal_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Batch_enclosureId_key" ON "Batch"("enclosureId");

-- CreateIndex
CREATE UNIQUE INDEX "Animal_number_key" ON "Animal"("number");

-- AddForeignKey
ALTER TABLE "Batch" ADD CONSTRAINT "Batch_enclosureId_fkey" FOREIGN KEY ("enclosureId") REFERENCES "Enclosure"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Animal" ADD CONSTRAINT "Animal_batchId_fkey" FOREIGN KEY ("batchId") REFERENCES "Batch"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Animal" ADD CONSTRAINT "Animal_enclosureId_fkey" FOREIGN KEY ("enclosureId") REFERENCES "Enclosure"("id") ON DELETE SET NULL ON UPDATE CASCADE;
