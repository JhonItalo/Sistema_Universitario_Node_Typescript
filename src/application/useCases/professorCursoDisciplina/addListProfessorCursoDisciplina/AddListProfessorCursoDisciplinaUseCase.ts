import { ProfessorCursoDisciplina } from "@prisma/client";
import { inject, injectable } from "tsyringe";
import { IProfessorCursoDisciplinaRepository } from "../../../../domain/repositories/IProfessorCursoDisciplinaRepository";
import { IAddListProfessorCursoDisciplina } from "../../../../domain/useCases/professorCursoDisciplina/IAddListProfessorCursoDisciplina";

@injectable()
class AddListProfessorCursoDisciplinaUseCase implements IAddListProfessorCursoDisciplina {
  constructor(
    @inject("ProfessorCursoDisciplinaRepository")
    private professorCursoDisciplinaRepository: IProfessorCursoDisciplinaRepository
  ) {}

  async execute(
    id_professor: string,
    listCursoDisciplina: number[]
  ): Promise<ProfessorCursoDisciplina[]> {
    const cursoDisciplinaCadastradas = await this.professorCursoDisciplinaRepository.findByMany({
      id_professor,
    });

    const cursoDisciplinaCadastradasIdArray = cursoDisciplinaCadastradas.map(
      (item) => item.id_cursoDisciplina
    );

    const RemoveUnselectedCursoDisciplinas: number[] = cursoDisciplinaCadastradasIdArray.filter(
      (num: number) => !listCursoDisciplina.includes(num)
    );

    const addNewCursoDisciplina: number[] = listCursoDisciplina.filter(
      (num: number) => !cursoDisciplinaCadastradasIdArray.includes(num)
    );

    return await this.professorCursoDisciplinaRepository.changeCursoDisciplina(
      id_professor,
      RemoveUnselectedCursoDisciplinas,
      addNewCursoDisciplina
    );
  }
}

export default AddListProfessorCursoDisciplinaUseCase;
