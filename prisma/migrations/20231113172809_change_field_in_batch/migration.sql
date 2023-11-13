/*
  Warnings:

  - You are about to drop the column `wheightAverage` on the `Batch` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Batch" DROP COLUMN "wheightAverage",
ADD COLUMN     "weightAverage" DOUBLE PRECISION DEFAULT 0;
