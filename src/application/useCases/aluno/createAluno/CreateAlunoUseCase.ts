import { inject, injectable } from "tsyringe";
import { IAlunoRepository } from "../../../../domain/repositories/IAlunoRepository";
import { Aluno } from "@prisma/client";
import { hash } from "bcrypt";
import { ICreateAluno } from "../../../../domain/useCases/aluno/ICreateAluno";
import { CpfAlreadyExists, EmailAlreadyExists } from "../../../../presentation/erros/Constants";
import DataConflictError from "../../../../presentation/erros/DataConflictError";
import { ICreateAlunoDTO } from "../../../DTOs/alunoDTO";

import IAlunoRepositoryInMemory from "../../../../domain/repositories/inMemory/IAlunoRepositoryInMemory";

@injectable()
class CreateAlunoUseCase implements ICreateAluno {
  constructor(
    @inject("AlunoRepository")
    private alunoRepository: IAlunoRepository,
    @inject("AlunoRepositoryInMemory")
    private alunoRepositoryInMemory: IAlunoRepositoryInMemory
  ) {}

  async execute(aluno: ICreateAlunoDTO): Promise<Aluno> {
    // regra de dominio--------------------------------------------------------------------
    /* 
    const AlunoEntityt = new AlunoEntity(aluno);

    AlunoEntityt.validEmail()

    AlunoEntityt.validCpf()
    
    const UserEntity = new UserEntity(aluno.email, password)

    UserEntity.validPassword().

    */
    //----------------------------------------------------------------------------------------------
    //regra de aplicação
    const cpfExist = await this.alunoRepository.findBy({ cpf: aluno.cpf });

    if (cpfExist) {
      throw new DataConflictError(CpfAlreadyExists);
    }
    const emailExist = await this.alunoRepository.findBy({ email: aluno.email });

    if (emailExist) {
      throw new DataConflictError(EmailAlreadyExists);
    }

    const password = await hash(aluno.cpf + aluno.nome, 10);

    const alunocreated = await this.alunoRepository.create({ ...aluno, password });

    await this.alunoRepositoryInMemory.resetCache("aluno_list");

    return alunocreated;
  }
}

export default CreateAlunoUseCase;
