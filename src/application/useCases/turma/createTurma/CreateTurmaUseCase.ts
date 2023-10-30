import { Turma } from "@prisma/client";
import { ITurmaRepository } from "../../../../domain/repositories/ITurmaRepository";
import { ICreateTurma } from "../../../../domain/useCases/turma/ICreateTurma";
import { inject, injectable } from "tsyringe";
import DataConflictError from "../../../../presentation/erros/DataConflictError";
import { TurmaAlreadyExists } from "../../../../presentation/erros/Constants";
import { ICreateTurmaDTO } from "../../../DTOs/turmaDTO";

@injectable()
class CreateTurmaoUsecase implements ICreateTurma {
  constructor(@inject("TurmaRepository") private turmaRepository: ITurmaRepository) {}

  async execute({ nome, id_curso }: ICreateTurmaDTO): Promise<Turma> {
    const turmaExits = await this.turmaRepository.findBy({ nome, id_curso });

    if (turmaExits) {
      throw new DataConflictError(TurmaAlreadyExists);
    }
    return await this.turmaRepository.create({ nome, id_curso });
  }
}
export default CreateTurmaoUsecase;
