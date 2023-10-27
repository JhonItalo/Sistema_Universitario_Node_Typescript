import { inject, injectable } from "tsyringe";
import { Aluno } from "@prisma/client";
import { IAlunoRepository } from "../../../../domain/repositories/IAlunoRepository";
import DataNotFoundError from "../../../../presentation/erros/DataNotFoundError";
import { AlunoNotFound } from "../../../../presentation/erros/Constants";
import { IFindAlunoById } from "../../../../domain/useCases/aluno/IFindAlunoById";

@injectable()
class FindAlunoByIdUseCase implements IFindAlunoById {
  constructor(@inject("AlunoRepository") private alunoRepository: IAlunoRepository) {}

  async execute(id: string): Promise<Aluno> {
    const aluno = await this.alunoRepository.findBy({ id });

    if (!aluno) {
      throw new DataNotFoundError(AlunoNotFound);
    }
    return aluno;
  }
}
export default FindAlunoByIdUseCase;
