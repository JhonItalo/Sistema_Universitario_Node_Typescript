-- CreateTable
CREATE TABLE "AlunoProfessorCursoDisciplina" (
    "id" SERIAL NOT NULL,
    "id_aluno" TEXT NOT NULL,
    "id_professorCursoDisciplina" INTEGER NOT NULL,

    CONSTRAINT "AlunoProfessorCursoDisciplina_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "AlunoProfessorCursoDisciplina" ADD CONSTRAINT "AlunoProfessorCursoDisciplina_id_aluno_fkey" FOREIGN KEY ("id_aluno") REFERENCES "Aluno"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AlunoProfessorCursoDisciplina" ADD CONSTRAINT "AlunoProfessorCursoDisciplina_id_professorCursoDisciplina_fkey" FOREIGN KEY ("id_professorCursoDisciplina") REFERENCES "ProfessorCursoDisciplina"("id") ON DELETE CASCADE ON UPDATE CASCADE;
