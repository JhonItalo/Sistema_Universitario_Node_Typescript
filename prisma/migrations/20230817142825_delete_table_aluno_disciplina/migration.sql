/*
  Warnings:

  - You are about to drop the `AlunoDisciplina` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "AlunoDisciplina" DROP CONSTRAINT "AlunoDisciplina_id_aluno_fkey";

-- DropForeignKey
ALTER TABLE "AlunoDisciplina" DROP CONSTRAINT "AlunoDisciplina_id_disciplina_fkey";

-- DropTable
DROP TABLE "AlunoDisciplina";
