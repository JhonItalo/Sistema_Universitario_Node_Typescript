-- CreateTable
CREATE TABLE "CursoDisciplina" (
    "id" SERIAL NOT NULL,
    "id_curso" INTEGER NOT NULL,
    "id_disciplina" INTEGER NOT NULL,

    CONSTRAINT "CursoDisciplina_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CursoDisciplina" ADD CONSTRAINT "CursoDisciplina_id_curso_fkey" FOREIGN KEY ("id_curso") REFERENCES "Curso"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CursoDisciplina" ADD CONSTRAINT "CursoDisciplina_id_disciplina_fkey" FOREIGN KEY ("id_disciplina") REFERENCES "Disciplina"("id") ON DELETE CASCADE ON UPDATE CASCADE;
