-- CreateTable
CREATE TABLE "Departamento" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(15) NOT NULL,

    CONSTRAINT "Departamento_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Departamento_nome_key" ON "Departamento"("nome");
