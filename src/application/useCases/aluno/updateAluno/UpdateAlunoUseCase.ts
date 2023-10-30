import { Aluno } from "@prisma/client";
import { IAlunoRepository } from "../../../../domain/repositories/IAlunoRepository";

import { injectable, inject } from "tsyringe";
import { IUpdateAluno } from "../../../../domain/useCases/aluno/IUpdateAluno";
import DataConflictError from "../../../../presentation/erros/DataConflictError";
import DataNotFoundError from "../../../../presentation/erros/DataNotFoundError";
import { AlunoNotFound, EmailAlreadyExists } from "../../../../presentation/erros/Constants";
import { IUpdateAlunoUserDTO } from "../../../DTOs/alunoDTO";

@injectable()
class UpdateAlunoUseCase implements IUpdateAluno {
  constructor(@inject("AlunoRepository") private alunoRepository: IAlunoRepository) {}

  async execute({ id, updateAluno, updateUser }: IUpdateAlunoUserDTO): Promise<Aluno> {
    const alunoUpdateRemoveUndefined = Object.entries(updateAluno).reduce((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = value;
      }
      return acc;
    }, {});

    const userUpdateRemoveUndefined = Object.entries(updateUser).reduce((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = value;
      }
      return acc;
    }, {});
    if (
      Object.keys(alunoUpdateRemoveUndefined).length === 0 &&
      Object.keys(userUpdateRemoveUndefined).length === 0
    ) {
      throw new Error("Requisição inválida");
    }

    const aluno = await this.alunoRepository.findBy({ id });
    if (!aluno) {
      throw new DataNotFoundError(AlunoNotFound);
    }

    if (updateAluno.email) {
      const emailExist = await this.alunoRepository.findBy({
        email: updateAluno.email,
      });
      if (emailExist) {
        throw new DataConflictError(EmailAlreadyExists);
      }
    }

    return this.alunoRepository.update({
      id,
      email: aluno.email,
      updateAluno,
      updateUser,
    });
  }
}

export default UpdateAlunoUseCase;
