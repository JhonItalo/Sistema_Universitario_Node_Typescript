import { IAlunoRepository } from "../../../../domain/repositories/IAlunoRepository";
import { Aluno } from "@prisma/client";
import { inject, injectable } from "tsyringe";
import { AlunoNotFound } from "../../../../presentation/erros/Constants";
import DataNotFoundError from "../../../../presentation/erros/DataNotFoundError";
import { IFindAlunoByEmail } from "../../../../domain/useCases/aluno/IFindAlunoByEmail";

@injectable()
class FindAlunoByEmailUseCase implements IFindAlunoByEmail {
  constructor(
    @inject("AlunoRepository")
    private alunoRepository: IAlunoRepository
  ) {}
  async execute(email: string): Promise<Aluno> {
    const aluno = await this.alunoRepository.findBy({ email });

    if (!aluno) {
      throw new DataNotFoundError(AlunoNotFound);
    }
    return aluno;
  }
}
export default FindAlunoByEmailUseCase;
