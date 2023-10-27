-- CreateTable
CREATE TABLE "Turma" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR NOT NULL,
    "id_curso" INTEGER NOT NULL,

    CONSTRAINT "Turma_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Turma" ADD CONSTRAINT "Turma_id_curso_fkey" FOREIGN KEY ("id_curso") REFERENCES "Curso"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
