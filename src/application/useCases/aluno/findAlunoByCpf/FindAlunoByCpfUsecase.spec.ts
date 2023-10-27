import { mock, MockProxy, mockReset } from "jest-mock-extended";

import { AlunoNotFound } from "../../../../presentation/erros/Constants";
import DataNotFoundError from "../../../../presentation/erros/DataNotFoundError";
import FindAlunoByCpfUseCase from "./FindAlunoByCpfUseCase";
import { IAlunoRepository } from "../../../../domain/repositories/IAlunoRepository";
import { Aluno } from "@prisma/client";

describe("FindAlunoByCpfUseCase", () => {
  let findAlunoByCpfUseCase: FindAlunoByCpfUseCase;
  let alunoRepository: MockProxy<IAlunoRepository>;

  beforeEach(() => {
    alunoRepository = mock<IAlunoRepository>();
    findAlunoByCpfUseCase = new FindAlunoByCpfUseCase(alunoRepository);
  });

  afterEach(() => {
    mockReset(alunoRepository);
  });
  const alunoCpf = "12345678910";

  it("Deve encontrar um aluno com o CPF especificado", async () => {
    alunoRepository.findBy.mockResolvedValue({} as Aluno);

    const aluno = await findAlunoByCpfUseCase.execute(alunoCpf);

    expect(aluno).toBeDefined();
  });

  it("Deve lançar o error DataNotFoundError se aluno não existir", async () => {
    alunoRepository.findBy.mockResolvedValue(null);

    await expect(findAlunoByCpfUseCase.execute(alunoCpf)).rejects.toThrowError(DataNotFoundError);
    await expect(findAlunoByCpfUseCase.execute(alunoCpf)).rejects.toHaveProperty(
      "message",
      AlunoNotFound
    );
  });
});
