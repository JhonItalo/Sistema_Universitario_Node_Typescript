import { inject, injectable } from "tsyringe";
import { IDeleteAluno } from "../../../../domain/useCases/aluno/IDeleteAluno";
import { AlunoNotFound } from "../../../../presentation/erros/Constants";
import DataNotFoundError from "../../../../presentation/erros/DataNotFoundError";
import { IAlunoRepository } from "../../../../domain/repositories/IAlunoRepository";

@injectable()
class DeleteAlunoUseCase implements IDeleteAluno {
  constructor(
    @inject("AlunoRepository")
    private alunoRepository: IAlunoRepository
  ) {}

  async execute(id: string): Promise<void> {
    const alunoExists = await this.alunoRepository.findBy({ id });

    if (!alunoExists) {
      throw new DataNotFoundError(AlunoNotFound);
    }
    await this.alunoRepository.delete(id);
  }
}

export default DeleteAlunoUseCase;
