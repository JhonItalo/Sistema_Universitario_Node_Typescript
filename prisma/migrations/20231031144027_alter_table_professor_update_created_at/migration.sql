/*
  Warnings:

  - You are about to drop the column `createt_at` on the `Professor` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Professor" DROP COLUMN "createt_at",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
