import { mock, MockProxy, mockReset } from "jest-mock-extended";
import { AlunoNotFound } from "../../../../presentation/erros/Constants";
import DataNotFoundError from "../../../../presentation/erros/DataNotFoundError";
import { IAlunoRepository } from "../../../../domain/repositories/IAlunoRepository";
import { Aluno } from "@prisma/client";
import FindAlunoByIdUseCase from "./FindALunoByIdUseCase";

describe("FindAlunoByIdUseCase", () => {
  let findAlunoByIdUseCase: FindAlunoByIdUseCase;
  let alunoRepository: MockProxy<IAlunoRepository>;

  beforeEach(() => {
    alunoRepository = mock<IAlunoRepository>();
    findAlunoByIdUseCase = new FindAlunoByIdUseCase(alunoRepository);
  });

  afterEach(() => {
    mockReset(alunoRepository);
  });
  const alunoId = "teste123";

  it("Deve encontrar um aluno com o id especificado", async () => {
    alunoRepository.findBy.mockResolvedValue({} as Aluno);

    const aluno = await findAlunoByIdUseCase.execute(alunoId);

    expect(aluno).toBeDefined();
  });

  it("Deve lançar o error DataNotFoundError se aluno não existir", async () => {
    alunoRepository.findBy.mockResolvedValue(null);

    await expect(findAlunoByIdUseCase.execute(alunoId)).rejects.toThrowError(DataNotFoundError);
    await expect(findAlunoByIdUseCase.execute(alunoId)).rejects.toHaveProperty(
      "message",
      AlunoNotFound
    );
  });
});
