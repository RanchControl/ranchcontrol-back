-- AlterTable
ALTER TABLE "Batch" ALTER COLUMN "wheightAverage" SET DEFAULT 0,
ALTER COLUMN "animalQuantity" DROP NOT NULL,
ALTER COLUMN "animalQuantity" SET DEFAULT 0;
