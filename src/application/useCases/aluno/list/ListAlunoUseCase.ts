import { injectable, inject } from "tsyringe";
import { IAlunoRepository } from "../../../../domain/repositories/IAlunoRepository";
import { Aluno } from "@prisma/client";
import { IListAluno } from "../../../../domain/useCases/aluno/IListAluno";
import IAlunoRepositoryInMemory from "../../../../domain/repositories/inMemory/IAlunoRepositoryInMemory";

@injectable()
class ListAlunoUseCase implements IListAluno {
  constructor(
    @inject("AlunoRepository") private alunoRepository: IAlunoRepository,
    @inject("AlunoRepositoryInMemory")
    private alunoRepositoryInMemory: IAlunoRepositoryInMemory
  ) {}

  async execute(): Promise<Aluno[]> {
    const cache = await this.alunoRepositoryInMemory.hasCache<Aluno[]>("aluno_list");

    if (cache) {
      return cache;
    }

    return await this.alunoRepository.findAll();
  }
}

export default ListAlunoUseCase;
