import { mock, MockProxy, mockReset } from "jest-mock-extended";

import { ICreateAlunoDTO } from "../../../../domain/dtos/alunoDto";
import { IAlunoRepository } from "../../../../domain/repositories/IAlunoRepository";
import { CpfAlreadyExists, EmailAlreadyExists } from "../../../../presentation/erros/Constants";
import DataConflictError from "../../../../presentation/erros/DataConflictError";
import CreateAlunoUseCase from "./CreateAlunoUseCase";

import { Aluno } from "@prisma/client";

describe("CreateAlunoUseCase", () => {
  let createAlunoUseCase: CreateAlunoUseCase;
  let alunoRepository: MockProxy<IAlunoRepository>;

  beforeEach(() => {
    alunoRepository = mock<IAlunoRepository>();
    createAlunoUseCase = new CreateAlunoUseCase(alunoRepository);
  });

  afterEach(() => {
    mockReset(alunoRepository);
  });

  const alunoData: ICreateAlunoDTO = {
    nome: "john",
    cpf: "000",
    email: "jhon@gmail",
    telefone: "33333",
    sexo: "M",
    id_curso: 1,
    id_turma: 3,
  };

  it("Deve criar um novo aluno", async () => {
    alunoRepository.findBy.mockResolvedValue(null);
    alunoRepository.create.mockResolvedValue({} as Aluno);

    const aluno = await createAlunoUseCase.execute(alunoData);

    expect(aluno).toBeDefined();
  });

  it("Deve lançar o error DataConflictError se CPF já existir no sistema", async () => {
    alunoRepository.findBy.mockResolvedValue({} as Aluno);

    await expect(createAlunoUseCase.execute(alunoData)).rejects.toThrowError(DataConflictError);
    await expect(createAlunoUseCase.execute(alunoData)).rejects.toHaveProperty(
      "message",
      CpfAlreadyExists
    );
  });

  it("Deve lançar o error DataConflictError se email já existir no sistema", async () => {
    alunoRepository.findBy.mockResolvedValue(null);
    alunoRepository.findBy.mockResolvedValue({} as Aluno); // Simula que já existe um aluno com o mesmo email

    await expect(createAlunoUseCase.execute(alunoData)).rejects.toThrowError(DataConflictError);
    await expect(createAlunoUseCase.execute(alunoData)).rejects.toHaveProperty(
      "message",
      EmailAlreadyExists
    );
  });
});
