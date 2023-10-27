-- DropForeignKey
ALTER TABLE "Turma" DROP CONSTRAINT "Turma_id_curso_fkey";

-- AddForeignKey
ALTER TABLE "Turma" ADD CONSTRAINT "Turma_id_curso_fkey" FOREIGN KEY ("id_curso") REFERENCES "Curso"("id") ON DELETE CASCADE ON UPDATE CASCADE;
