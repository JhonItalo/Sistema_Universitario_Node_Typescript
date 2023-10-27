import { inject, injectable } from "tsyringe";
import { ITurmaRepository } from "../../../../domain/repositories/ITurmaRepository";
import DataNotFoundError from "../../../../presentation/erros/DataNotFoundError";
import { TurmaNotFound } from "../../../../presentation/erros/Constants";
import { IDeleteTurma } from "../../../../domain/useCases/turma/IDeleteTurma";

@injectable()
class DeleteTurmaUseCase implements IDeleteTurma {
  constructor(@inject("TurmaRepository") private turmaRepository: ITurmaRepository) {}

  async execute(id: number): Promise<void> {
    const turma = await this.turmaRepository.findBy({ id });
    if (!turma) {
      throw new DataNotFoundError(TurmaNotFound);
    }
    await this.turmaRepository.delete(id);
  }
}

export default DeleteTurmaUseCase;
