import { inject, injectable } from "tsyringe";
import { IDisciplinaRepository } from "../../../../domain/repositories/IDisciplinaRepository";
import { IListDisciplina } from "../../../../domain/useCases/disciplina/IListDisciplina";
import { Disciplina } from "@prisma/client";
@injectable()
class ListDisciplinaUsecase implements IListDisciplina {
  constructor(
    @inject("DisciplinaRepository") private disciplinaRepository: IDisciplinaRepository
  ) {}
  async execute(): Promise<Disciplina[]> {
    return await this.disciplinaRepository.findAll();
  }
}
export default ListDisciplinaUsecase;
