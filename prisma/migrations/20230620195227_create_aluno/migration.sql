-- CreateTable
CREATE TABLE "Aluno" (
    "id" VARCHAR NOT NULL,
    "nome" VARCHAR NOT NULL,
    "email" VARCHAR(25) NOT NULL,
    "cpf" VARCHAR(15) NOT NULL,
    "sexo" "Sexo" NOT NULL,
    "telefone" VARCHAR NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id_turma" INTEGER NOT NULL,
    "id_curso" INTEGER NOT NULL,

    CONSTRAINT "Aluno_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Aluno" ADD CONSTRAINT "Aluno_id_turma_fkey" FOREIGN KEY ("id_turma") REFERENCES "Turma"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Aluno" ADD CONSTRAINT "Aluno_id_curso_fkey" FOREIGN KEY ("id_curso") REFERENCES "Curso"("id") ON DELETE CASCADE ON UPDATE CASCADE;
