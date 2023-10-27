-- CreateEnum
CREATE TYPE "UserStatus" AS ENUM ('departamento', 'professor', 'aluno');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" VARCHAR NOT NULL,
    "password" VARCHAR NOT NULL,
    "status" "UserStatus" NOT NULL,
    "id_departamento" INTEGER,
    "id_professor" TEXT,
    "id_aluno" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_id_departamento_fkey" FOREIGN KEY ("id_departamento") REFERENCES "Departamento"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_id_professor_fkey" FOREIGN KEY ("id_professor") REFERENCES "Professor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_id_aluno_fkey" FOREIGN KEY ("id_aluno") REFERENCES "Aluno"("id") ON DELETE CASCADE ON UPDATE CASCADE;
