import { CursoDisciplina } from "@prisma/client";
import { ICursoDisciplinaRepository } from "../../../../domain/repositories/ICursoDisciplina";
import { inject, injectable } from "tsyringe";
import { IAddListCursoDisciplina } from "../../../../domain/useCases/cursoDisciplina/IAddListcursoDisciplina";

@injectable()
class AddListCursoDisciplinaUseCase implements IAddListCursoDisciplina {
  constructor(
    @inject("CursoDisciplinaRepository")
    private cursoDisciplinaRepository: ICursoDisciplinaRepository
  ) {}

  async execute(id_curso: number, listDisciplina: number[]): Promise<CursoDisciplina[]> {
    const disciplinaCadastradas = await this.cursoDisciplinaRepository.findByMany({ id_curso });

    const disciplinaCadastradasIdArray = disciplinaCadastradas.map((item) => item.id_disciplina);

    const removeUnselectedDisciplinas: number[] = disciplinaCadastradasIdArray.filter(
      (num: number) => !listDisciplina.includes(num)
    );

    const addNewDisciplinas: number[] = listDisciplina.filter(
      (num: number) => !disciplinaCadastradasIdArray.includes(num)
    );

    return await this.cursoDisciplinaRepository.changeDisciplina(
      id_curso,
      removeUnselectedDisciplinas,
      addNewDisciplinas
    );
  }
}

export default AddListCursoDisciplinaUseCase;
