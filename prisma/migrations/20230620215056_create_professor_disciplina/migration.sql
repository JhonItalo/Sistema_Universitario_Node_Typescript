-- CreateTable
CREATE TABLE "ProfessorDisciplina" (
    "id" SERIAL NOT NULL,
    "id_professor" TEXT NOT NULL,
    "id_disciplina" INTEGER NOT NULL,

    CONSTRAINT "ProfessorDisciplina_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ProfessorDisciplina" ADD CONSTRAINT "ProfessorDisciplina_id_professor_fkey" FOREIGN KEY ("id_professor") REFERENCES "Professor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProfessorDisciplina" ADD CONSTRAINT "ProfessorDisciplina_id_disciplina_fkey" FOREIGN KEY ("id_disciplina") REFERENCES "Disciplina"("id") ON DELETE CASCADE ON UPDATE CASCADE;
