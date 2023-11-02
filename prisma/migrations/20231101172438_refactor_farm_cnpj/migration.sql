/*
  Warnings:

  - You are about to alter the column `cnpj` on the `Farm` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(14)`.
  - A unique constraint covering the columns `[cnpj]` on the table `Farm` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Farm" ALTER COLUMN "cnpj" SET DATA TYPE VARCHAR(14);

-- CreateIndex
CREATE UNIQUE INDEX "Farm_cnpj_key" ON "Farm"("cnpj");
