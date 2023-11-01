-- CreateTable
CREATE TABLE "Enclosure" (
    "id" SERIAL NOT NULL,
    "farmId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "Type" TEXT NOT NULL,
    "address" TEXT NOT NULL,

    CONSTRAINT "Enclosure_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Enclosure" ADD CONSTRAINT "Enclosure_farmId_fkey" FOREIGN KEY ("farmId") REFERENCES "Farm"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
