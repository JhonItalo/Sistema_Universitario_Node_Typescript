/*
  Warnings:

  - Added the required column `carga_horaria` to the `Disciplina` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Disciplina" ADD COLUMN     "carga_horaria" INTEGER NOT NULL;
