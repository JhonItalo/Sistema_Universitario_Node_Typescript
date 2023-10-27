import { inject, injectable } from "tsyringe";

import { Turma } from "@prisma/client";
import { ITurmaRepository } from "../../../../domain/repositories/ITurmaRepository";
import { IListTurma } from "../../../../domain/useCases/turma/IListTurma";

@injectable()
class ListTurmaUsecase implements IListTurma {
  constructor(@inject("TurmaRepository") private turmaRepository: ITurmaRepository) {}
  async execute(): Promise<Turma[]> {
    return await this.turmaRepository.findAll();
  }
}
export default ListTurmaUsecase;
