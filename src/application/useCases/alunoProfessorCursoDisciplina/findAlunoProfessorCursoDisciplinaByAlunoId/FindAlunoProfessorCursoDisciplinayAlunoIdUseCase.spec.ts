import { AlunoProfessorCursoDisciplina } from "@prisma/client";
import { mock, MockProxy, mockReset } from "jest-mock-extended";

import { IAlunoProfessorCursoDisciplinaRepository } from "../../../../domain/repositories/IAlunoProfessorCursoDisciplina";
import FindGradeByAlunoIdUseCase from "./FindAlunoProfessorCursoDisciplinaByAlunoIdUseCase";

describe("FindGradeByAlunoIdUseCase", () => {
  let findGradeByAlunoIdUseCase: FindGradeByAlunoIdUseCase;
  let alunoProfessorCursoDisciplina: MockProxy<IAlunoProfessorCursoDisciplinaRepository>;

  beforeEach(() => {
    alunoProfessorCursoDisciplina = mock<IAlunoProfessorCursoDisciplinaRepository>();
    findGradeByAlunoIdUseCase = new FindGradeByAlunoIdUseCase(alunoProfessorCursoDisciplina);
  });

  afterEach(() => {
    mockReset(alunoProfessorCursoDisciplina);
  });
  it("deve retornar a grade do aluno", async () => {
    const id_aluno = "test3123";
    alunoProfessorCursoDisciplina.findByAlunoIdMoreInfo.mockResolvedValue([
      {} as AlunoProfessorCursoDisciplina,
    ]);
    const grade = await findGradeByAlunoIdUseCase.execute(id_aluno);
    expect(grade).toBeDefined();
  });
});
