import { IFindAlunoByCpf } from "../../../../domain/useCases/aluno/IFindAlunoByCpf";
import { IAlunoRepository } from "../../../../domain/repositories/IAlunoRepository";
import { Aluno } from "@prisma/client";
import { inject, injectable } from "tsyringe";
import { AlunoNotFound } from "../../../../presentation/erros/Constants";
import DataNotFoundError from "../../../../presentation/erros/DataNotFoundError";

@injectable()
class FindAlunoByCpfUseCase implements IFindAlunoByCpf {
  constructor(
    @inject("AlunoRepository")
    private alunoRepository: IAlunoRepository
  ) {}
  async execute(cpf: string): Promise<Aluno> {
    const aluno = await this.alunoRepository.findBy({ cpf });
    if (!aluno) {
      throw new DataNotFoundError(AlunoNotFound);
    }
    return aluno;
  }
}
export default FindAlunoByCpfUseCase;
