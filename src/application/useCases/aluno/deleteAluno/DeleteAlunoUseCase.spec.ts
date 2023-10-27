import { mock, MockProxy, mockReset } from "jest-mock-extended";

import { IAlunoRepository } from "../../../../domain/repositories/IAlunoRepository";
import { AlunoNotFound } from "../../../../presentation/erros/Constants";
import DataNotFoundError from "../../../../presentation/erros/DataNotFoundError";
import DeleteAlunoUseCase from "./DeleteAlunoUseCase";
import { Aluno } from "@prisma/client";

describe("DeleteAlunoUseCase", () => {
  let deleteAlunoUseCase: DeleteAlunoUseCase;
  let alunoRepository: MockProxy<IAlunoRepository>;

  beforeEach(() => {
    alunoRepository = mock<IAlunoRepository>();
    deleteAlunoUseCase = new DeleteAlunoUseCase(alunoRepository);
  });

  afterEach(() => {
    mockReset(alunoRepository);
  });

  it("Deve excluir um aluno se ele existir", async () => {
    const alunoId = "1";

    alunoRepository.findBy.mockResolvedValue({} as Aluno);

    await deleteAlunoUseCase.execute(alunoId);

    expect(alunoRepository.delete).toHaveBeenCalledWith(alunoId);
  });

  it("Deve lançar o error DataNotFoundError se aluno não existir", async () => {
    const alunoId = "2";

    alunoRepository.findBy.mockResolvedValue(null);

    await expect(deleteAlunoUseCase.execute(alunoId)).rejects.toThrowError(DataNotFoundError);
    await expect(deleteAlunoUseCase.execute(alunoId)).rejects.toHaveProperty(
      "message",
      AlunoNotFound
    );
  });
});
