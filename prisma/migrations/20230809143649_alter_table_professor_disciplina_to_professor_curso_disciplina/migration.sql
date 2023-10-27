/*
  Warnings:

  - You are about to drop the `ProfessorDisciplina` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ProfessorDisciplina" DROP CONSTRAINT "ProfessorDisciplina_id_disciplina_fkey";

-- DropForeignKey
ALTER TABLE "ProfessorDisciplina" DROP CONSTRAINT "ProfessorDisciplina_id_professor_fkey";

-- DropTable
DROP TABLE "ProfessorDisciplina";

-- CreateTable
CREATE TABLE "ProfessorCursoDisciplina" (
    "id" SERIAL NOT NULL,
    "id_professor" TEXT NOT NULL,
    "id_cursoDisciplina" INTEGER NOT NULL,

    CONSTRAINT "ProfessorCursoDisciplina_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ProfessorCursoDisciplina" ADD CONSTRAINT "ProfessorCursoDisciplina_id_professor_fkey" FOREIGN KEY ("id_professor") REFERENCES "Professor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProfessorCursoDisciplina" ADD CONSTRAINT "ProfessorCursoDisciplina_id_cursoDisciplina_fkey" FOREIGN KEY ("id_cursoDisciplina") REFERENCES "CursoDisciplina"("id") ON DELETE CASCADE ON UPDATE CASCADE;
