import { inject, injectable } from "tsyringe";
import { IAlunoRepository } from "../../../../domain/repositories/IAlunoRepository";
import { Aluno } from "@prisma/client";
import { hash } from "bcrypt";
import { ICreateAluno } from "../../../../domain/useCases/aluno/ICreateAluno";
import { CpfAlreadyExists, EmailAlreadyExists } from "../../../../presentation/erros/Constants";
import DataConflictError from "../../../../presentation/erros/DataConflictError";
import { ICreateAlunoDTO } from "../../../DTOs/alunoDTO";

@injectable()
class CreateAlunoUseCase implements ICreateAluno {
  constructor(
    @inject("AlunoRepository")
    private alunoRepository: IAlunoRepository
  ) {}

  async execute(aluno: ICreateAlunoDTO): Promise<Aluno> {
    const cpfExist = await this.alunoRepository.findBy({ cpf: aluno.cpf });

    if (cpfExist) {
      throw new DataConflictError(CpfAlreadyExists);
    }
    const emailExist = await this.alunoRepository.findBy({ email: aluno.email });

    if (emailExist) {
      throw new DataConflictError(EmailAlreadyExists);
    }
    const password = await hash(aluno.cpf + aluno.nome, 10);

    return await this.alunoRepository.create({ ...aluno, password });
  }
}

export default CreateAlunoUseCase;
