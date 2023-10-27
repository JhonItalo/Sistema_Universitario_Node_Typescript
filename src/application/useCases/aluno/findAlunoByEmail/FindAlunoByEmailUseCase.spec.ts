import { mock, MockProxy, mockReset } from "jest-mock-extended";
import { AlunoNotFound } from "../../../../presentation/erros/Constants";
import DataNotFoundError from "../../../../presentation/erros/DataNotFoundError";
import { IAlunoRepository } from "../../../../domain/repositories/IAlunoRepository";
import { Aluno } from "@prisma/client";
import FindAlunoByEmailUseCase from "./FindAlunoByEmailUseCase";

describe("FindAlunoByEmailUseCase", () => {
  let findAlunoByEmailUseCase: FindAlunoByEmailUseCase;
  let alunoRepository: MockProxy<IAlunoRepository>;

  beforeEach(() => {
    alunoRepository = mock<IAlunoRepository>();
    findAlunoByEmailUseCase = new FindAlunoByEmailUseCase(alunoRepository);
  });

  afterEach(() => {
    mockReset(alunoRepository);
  });
  const alunoEmail = "jhon@gmail.com";

  it("Deve encontrar um aluno com o email especificado", async () => {
    alunoRepository.findBy.mockResolvedValue({} as Aluno);

    const aluno = await findAlunoByEmailUseCase.execute(alunoEmail);

    expect(aluno).toBeDefined();
  });

  it("Deve lançar o error DataNotFoundError se aluno não existir", async () => {
    alunoRepository.findBy.mockResolvedValue(null);

    await expect(findAlunoByEmailUseCase.execute(alunoEmail)).rejects.toThrowError(
      DataNotFoundError
    );
    await expect(findAlunoByEmailUseCase.execute(alunoEmail)).rejects.toHaveProperty(
      "message",
      AlunoNotFound
    );
  });
});
