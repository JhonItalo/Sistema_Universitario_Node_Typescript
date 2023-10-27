import { injectable, inject } from "tsyringe";
import { IDisciplinaRepository } from "../../../../domain/repositories/IDisciplinaRepository";
import { ICreateDisciplina } from "../../../../domain/useCases/disciplina/ICreateDisciplina";
import { Disciplina } from "@prisma/client";
import DataConflictError from "../../../../presentation/erros/DataConflictError";
import { DisciplinaAlreadyExists } from "../../../../presentation/erros/Constants";
import { ICreateDisciplinaDTO } from "../../../../domain/dtos/disciplina";
@injectable()
class CreateDisciplinaUsecase implements ICreateDisciplina {
  constructor(
    @inject("DisciplinaRepository") private disciplinaRepository: IDisciplinaRepository
  ) {}

  async execute({ nome, carga_horaria }: ICreateDisciplinaDTO): Promise<Disciplina> {
    const disciplinaExists = await this.disciplinaRepository.findBy({ nome });

    if (disciplinaExists) {
      throw new DataConflictError(DisciplinaAlreadyExists);
    }

    return await this.disciplinaRepository.create({ nome, carga_horaria });
  }
}
export default CreateDisciplinaUsecase;
