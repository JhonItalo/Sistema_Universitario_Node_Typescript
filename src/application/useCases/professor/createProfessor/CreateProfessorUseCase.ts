import { Professor } from "@prisma/client";
import { hash } from "bcrypt";
import { IProfessorRepository } from "../../../../domain/repositories/IProfessorRepository";
import { ICreateProfessor } from "../../../../domain/useCases/professor/ICreateProfessor";
import { inject, injectable } from "tsyringe";
import DataConflictError from "../../../../presentation/erros/DataConflictError";
import { CpfAlreadyExists, EmailAlreadyExists } from "../../../../presentation/erros/Constants";
import { ICreateProfessorDTO } from "../../../DTOs/professorDTO";

@injectable()
class CreateProfessorUseCase implements ICreateProfessor {
  constructor(@inject("ProfessorRepository") private professorRepository: IProfessorRepository) {}

  async execute(professor: ICreateProfessorDTO): Promise<Professor> {
    const cpfExist = await this.professorRepository.findBy({ cpf: professor.cpf });

    if (cpfExist) {
      throw new DataConflictError(CpfAlreadyExists);
    }
    const emailExist = await this.professorRepository.findBy({
      email: professor.email,
    });

    if (emailExist) {
      throw new DataConflictError(EmailAlreadyExists);
    }

    const password = await hash(professor.cpf + professor.nome, 10);

    return await this.professorRepository.create({
      ...professor,
      password,
    });
  }
}

export default CreateProfessorUseCase;
