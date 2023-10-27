import { inject, injectable } from "tsyringe";
import { ITurmaRepository } from "../../../../domain/repositories/ITurmaRepository";
import { Turma } from "@prisma/client";
import DataNotFoundError from "../../../../presentation/erros/DataNotFoundError";
import { IUpdateTurma } from "../../../../domain/useCases/turma/IUpdateTurma";
import { TurmaAlreadyExists, TurmaNotFound } from "../../../../presentation/erros/Constants";
import DataConflictError from "../../../../presentation/erros/DataConflictError";
import { IUpdateTurmaDTO } from "../../../../domain/dtos/turma";
@injectable()
class UpdateTurmaUseCase implements IUpdateTurma {
  constructor(@inject("TurmaRepository") private turmaRepository: ITurmaRepository) {}

  async execute({ id, nome, id_curso }: IUpdateTurmaDTO): Promise<Turma> {
    if (!nome && !id_curso) {
      throw new Error("Requisição inválida");
    }

    const turma = await this.turmaRepository.findBy({ id });
    if (!turma) {
      throw new DataNotFoundError(TurmaNotFound);
    }

    const turmaExits = await this.turmaRepository.findBy({
      nome: nome ? nome : turma.nome,
      id_curso: id_curso ? id_curso : turma.id_curso,
    });

    if (turmaExits) {
      throw new DataConflictError(TurmaAlreadyExists);
    }

    return await this.turmaRepository.update({ id, nome, id_curso });
  }
}
export default UpdateTurmaUseCase;
