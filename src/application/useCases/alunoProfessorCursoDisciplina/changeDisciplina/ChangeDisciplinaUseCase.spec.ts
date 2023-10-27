import { mock, MockProxy, mockReset } from "jest-mock-extended";

import { IAlunoProfessorCursoDisciplinaRepository } from "../../../../domain/repositories/IAlunoProfessorCursoDisciplina";
import ChangeDisciplinaUseCase from "./ChangeDisciplinaUseCase";

describe("ChangeDisciplinaUseCase", () => {
  let changeDisciplinaUseCase: ChangeDisciplinaUseCase;
  let alunoProfessorCursoDisciplinaRepository: MockProxy<IAlunoProfessorCursoDisciplinaRepository>;

  beforeEach(() => {
    alunoProfessorCursoDisciplinaRepository = mock<IAlunoProfessorCursoDisciplinaRepository>();
    changeDisciplinaUseCase = new ChangeDisciplinaUseCase(alunoProfessorCursoDisciplinaRepository);
  });

  afterEach(() => {
    mockReset(alunoProfessorCursoDisciplinaRepository);
  });

  it("Deve alterar as disciplinas corretamente", async () => {
    const id_aluno = "1";
    const disciplina = [1, 2, 3, 5];
    alunoProfessorCursoDisciplinaRepository.findListProfessorCursoDisciplinaArrayNumber.mockResolvedValue(
      [1, 4]
    );
    alunoProfessorCursoDisciplinaRepository.changeDisciplina.mockResolvedValue([
      {
        id: 1,
        id_aluno: "teste1123",
        id_professorCursoDisciplina: 1,
      },
      {
        id: 2,
        id_aluno: "teste1123",
        id_professorCursoDisciplina: 1,
      },
      {
        id: 3,
        id_aluno: "teste1123",
        id_professorCursoDisciplina: 1,
      },
      {
        id: 5,
        id_aluno: "teste1123",
        id_professorCursoDisciplina: 1,
      },
    ]);

    const disciplinas = await changeDisciplinaUseCase.execute(id_aluno, disciplina);

    const compare = disciplinas.map(({ id }) => {
      return id;
    });

    expect(compare).toEqual(disciplina);
  });
});
