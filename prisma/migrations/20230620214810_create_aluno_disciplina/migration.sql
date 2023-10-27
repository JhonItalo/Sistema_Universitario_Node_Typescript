-- CreateTable
CREATE TABLE "AlunoDisciplina" (
    "id" SERIAL NOT NULL,
    "id_aluno" TEXT NOT NULL,
    "id_disciplina" INTEGER NOT NULL,

    CONSTRAINT "AlunoDisciplina_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "AlunoDisciplina" ADD CONSTRAINT "AlunoDisciplina_id_aluno_fkey" FOREIGN KEY ("id_aluno") REFERENCES "Aluno"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AlunoDisciplina" ADD CONSTRAINT "AlunoDisciplina_id_disciplina_fkey" FOREIGN KEY ("id_disciplina") REFERENCES "Disciplina"("id") ON DELETE CASCADE ON UPDATE CASCADE;
