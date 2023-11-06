import { inject, injectable } from "tsyringe";
import { ICursoDisciplinaRepository } from "../../../../domain/repositories/ICursoDisciplina";
import { CursoDisciplina } from "@prisma/client";
import { IFindCursoDisciplinaByCursoId } from "../../../../domain/useCases/cursoDisciplina/IFindCursoDisciplinaByCursoId";

@injectable()
class FindCursoDisciplinaByCursoIdUseCase implements IFindCursoDisciplinaByCursoId {
  constructor(
    @inject("CursoDisciplinaRepository")
    private cursoDisciplinaRepository: ICursoDisciplinaRepository
  ) {}
  async execute(id_curso: number): Promise<CursoDisciplina[]> {
    
    const include = {
      curso: true,
      disciplina: true,
    };

    return await this.cursoDisciplinaRepository.findByMany({ id_curso }, include);
  }
}
export default FindCursoDisciplinaByCursoIdUseCase;
