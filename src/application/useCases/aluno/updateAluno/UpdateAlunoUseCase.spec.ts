import { mock, MockProxy, mockReset } from "jest-mock-extended";
import UpdateAlunoUseCase from "./UpdateAlunoUseCase";
import { IAlunoRepository } from "../../../../domain/repositories/IAlunoRepository";
import { Aluno } from "@prisma/client";

import DataConflictError from "../../../../presentation/erros/DataConflictError";
import DataNotFoundError from "../../../../presentation/erros/DataNotFoundError";
import { AlunoNotFound, EmailAlreadyExists } from "../../../../presentation/erros/Constants";
import { IUpdateAlunoDTO } from "../../../DTOs/alunoDTO";

describe("UpdateAlunoUseCase", () => {
  let updateAlunoUseCase: UpdateAlunoUseCase;
  let alunoRepository: MockProxy<IAlunoRepository>;

  beforeEach(() => {
    alunoRepository = mock<IAlunoRepository>();
    updateAlunoUseCase = new UpdateAlunoUseCase(alunoRepository);
  });

  afterEach(() => {
    mockReset(alunoRepository);
  });

  const alunoExemplo: Aluno = {
    id: "1",
    nome: "João da Silva",
    email: "joao@example.com",
    cpf: "12345678910",
    sexo: "M",
    telefone: "12345678",
    createdAt: new Date(),
    id_turma: 123,
    id_curso: 456,
  };
  const userExemplo = {
    email: "joao@example.com",
  };

  it("Deve atualizar um aluno com sucesso", async () => {
    const id: string = "1";
    const updateAluno: IUpdateAlunoDTO = {
      id: "ddd",
      nome: "jhon italo",
    };
    const updateUser: { email: string } = {
      email: "jhon_italo@gamil.com",
    };

    alunoRepository.findBy.mockResolvedValue(alunoExemplo);
    alunoRepository.findBy.mockResolvedValue(null);
    alunoRepository.update.mockResolvedValue({} as Aluno);

    const aluno = await updateAlunoUseCase.execute({ id, updateAluno, updateUser });

    expect(aluno).toBeDefined();
  });

  it("Deve lançar um erro quando não existir o aluno", async () => {
    const id: string = "1";

    const updateAluno: IUpdateAlunoDTO = {
      id: "dd",
      nome: "jhon italo",
      email: "jhon_italo@gamil.com",
    };
    const updateUser: { email: string } = {
      email: "jhon_italo@gamil.com",
    };
    alunoRepository.findBy.mockResolvedValue(null);

    await expect(updateAlunoUseCase.execute({ id, updateAluno, updateUser })).rejects.toThrowError(
      DataNotFoundError
    );
    await expect(
      updateAlunoUseCase.execute({ id, updateAluno, updateUser })
    ).rejects.toHaveProperty("message", AlunoNotFound);
  });

  it("Deve lançar um erro quando não for enviado nenhum dado para modificação", async () => {
    const id: string = "1";
    const updateAluno: IUpdateAlunoDTO = { id, nome: undefined };
    const updateUser: { email: string } = { email: undefined };

    alunoRepository.findBy.mockResolvedValue({} as Aluno);

    await expect(updateAlunoUseCase.execute({ id, updateAluno, updateUser })).rejects.toThrow(
      "Requisição inválida"
    );
  });

  it("Deve lançar um erro quando tentar mudar o email para um já existente", async () => {
    const id: string = "1";
    const updateAluno: IUpdateAlunoDTO = {
      id,
      nome: "jhon italo",
      email: "jhon_italo@gamil.com",
    };
    const updateUser: { email: string } = {
      email: "jhon_italo@gamil.com",
    };

    alunoRepository.findBy.mockResolvedValue(alunoExemplo);
    alunoRepository.findBy.mockResolvedValue({} as Aluno);

    await expect(updateAlunoUseCase.execute({ id, updateAluno, updateUser })).rejects.toThrowError(
      DataConflictError
    );
    await expect(
      updateAlunoUseCase.execute({ id, updateAluno, updateUser })
    ).rejects.toHaveProperty("message", EmailAlreadyExists);
  });
});
