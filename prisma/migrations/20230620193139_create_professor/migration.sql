-- CreateEnum
CREATE TYPE "Sexo" AS ENUM ('M', 'F');

-- CreateTable
CREATE TABLE "Professor" (
    "id" TEXT NOT NULL,
    "nome" VARCHAR NOT NULL,
    "email" VARCHAR(25) NOT NULL,
    "cpf" VARCHAR(15) NOT NULL,
    "sexo" "Sexo" NOT NULL,
    "telefone" VARCHAR NOT NULL,
    "createt_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id_departamento" INTEGER NOT NULL,

    CONSTRAINT "Professor_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Professor_email_key" ON "Professor"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Professor_cpf_key" ON "Professor"("cpf");

-- AddForeignKey
ALTER TABLE "Professor" ADD CONSTRAINT "Professor_id_departamento_fkey" FOREIGN KEY ("id_departamento") REFERENCES "Departamento"("id") ON DELETE CASCADE ON UPDATE CASCADE;
