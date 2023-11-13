/*
  Warnings:

  - You are about to drop the column `batchId` on the `Animal` table. All the data in the column will be lost.
  - You are about to drop the column `enclosureId` on the `Animal` table. All the data in the column will be lost.
  - You are about to drop the column `enclosureId` on the `Batch` table. All the data in the column will be lost.
  - You are about to drop the column `farmId` on the `Enclosure` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Farm` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[enclosure]` on the table `Batch` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `enclosure` to the `Batch` table without a default value. This is not possible if the table is not empty.
  - Added the required column `farm` to the `Enclosure` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user` to the `Farm` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Animal" DROP CONSTRAINT "Animal_batchId_fkey";

-- DropForeignKey
ALTER TABLE "Animal" DROP CONSTRAINT "Animal_enclosureId_fkey";

-- DropForeignKey
ALTER TABLE "Batch" DROP CONSTRAINT "Batch_enclosureId_fkey";

-- DropForeignKey
ALTER TABLE "Enclosure" DROP CONSTRAINT "Enclosure_farmId_fkey";

-- DropForeignKey
ALTER TABLE "Farm" DROP CONSTRAINT "Farm_userId_fkey";

-- DropIndex
DROP INDEX "Batch_enclosureId_key";

-- AlterTable
ALTER TABLE "Animal" DROP COLUMN "batchId",
DROP COLUMN "enclosureId",
ADD COLUMN     "batch" INTEGER,
ADD COLUMN     "enclosure" INTEGER;

-- AlterTable
ALTER TABLE "Batch" DROP COLUMN "enclosureId",
ADD COLUMN     "enclosure" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Enclosure" DROP COLUMN "farmId",
ADD COLUMN     "farm" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Farm" DROP COLUMN "userId",
ADD COLUMN     "user" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Batch_enclosure_key" ON "Batch"("enclosure");

-- AddForeignKey
ALTER TABLE "Farm" ADD CONSTRAINT "Farm_user_fkey" FOREIGN KEY ("user") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Enclosure" ADD CONSTRAINT "Enclosure_farm_fkey" FOREIGN KEY ("farm") REFERENCES "Farm"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Batch" ADD CONSTRAINT "Batch_enclosure_fkey" FOREIGN KEY ("enclosure") REFERENCES "Enclosure"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Animal" ADD CONSTRAINT "Animal_batch_fkey" FOREIGN KEY ("batch") REFERENCES "Batch"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Animal" ADD CONSTRAINT "Animal_enclosure_fkey" FOREIGN KEY ("enclosure") REFERENCES "Enclosure"("id") ON DELETE SET NULL ON UPDATE CASCADE;
