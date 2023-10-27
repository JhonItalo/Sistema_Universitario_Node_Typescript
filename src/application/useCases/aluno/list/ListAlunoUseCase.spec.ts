import { mock, MockProxy, mockReset } from "jest-mock-extended";
import { IAlunoRepository } from "../../../../domain/repositories/IAlunoRepository";
import { Aluno } from "@prisma/client";
import ListAlunoUseCase from "./ListAlunoUseCase";

describe("FindAlunoByIdUseCase", () => {
  let listAlunoUseCase: ListAlunoUseCase;
  let alunoRepository: MockProxy<IAlunoRepository>;

  beforeEach(() => {
    alunoRepository = mock<IAlunoRepository>();
    listAlunoUseCase = new ListAlunoUseCase(alunoRepository);
  });

  afterEach(() => {
    mockReset(alunoRepository);
  });

  it("Deve retornar uma lista de alunos", async () => {
    alunoRepository.findAll.mockResolvedValue([{} as Aluno]);

    const alunoList = await listAlunoUseCase.execute();

    expect(alunoList).toBeDefined();
  });
});
