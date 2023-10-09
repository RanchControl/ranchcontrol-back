-- AlterTable
ALTER TABLE "User" ALTER COLUMN "updateAt" DROP DEFAULT;

-- CreateTable
CREATE TABLE "Farm" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "CNPJ" TEXT NOT NULL,
    "address" TEXT NOT NULL,

    CONSTRAINT "Farm_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Farm" ADD CONSTRAINT "Farm_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
