import { Professor } from "@prisma/client";
import { IProfessorRepository } from "../../../../domain/repositories/IProfessorRepository";
import { inject, injectable } from "tsyringe";
import { IUpdateProfessor } from "../../../../domain/useCases/professor/IUpdateProfessor";
import DataNotFoundError from "../../../../presentation/erros/DataNotFoundError";
import { EmailAlreadyExists, ProfessorNotFound } from "../../../../presentation/erros/Constants";
import DataConflictError from "../../../../presentation/erros/DataConflictError";
import { IUpdateProfessorUserDTO } from "../../../DTOs/professorDTO";

@injectable()
class UpdateProfessorUseCase implements IUpdateProfessor {
  constructor(@inject("ProfessorRepository") private professorRepository: IProfessorRepository) {}

  async execute({ id, updateProfessor, updateUser }: IUpdateProfessorUserDTO): Promise<Professor> {
    const ProfessorUpdateRemoveUndefined = Object.entries(updateProfessor).reduce(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = value;
        }
        return acc;
      },
      {}
    );

    const UserUpdateRemoveUndefined = Object.entries(updateUser).reduce((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = value;
      }
      return acc;
    }, {});

    if (
      Object.keys(ProfessorUpdateRemoveUndefined).length === 0 &&
      Object.keys(UserUpdateRemoveUndefined).length === 0
    ) {
      throw new Error("Requisição inválida");
    }

    const professor = await this.professorRepository.findBy({ id });
    if (!professor) {
      throw new DataNotFoundError(ProfessorNotFound);
    }

    if (updateProfessor.email) {
      const emailExist = await this.professorRepository.findBy({
        email: updateProfessor.email,
      });
      if (emailExist) {
        throw new DataConflictError(EmailAlreadyExists);
      }
    }

    return this.professorRepository.update({
      id,
      email: professor.email,
      updateProfessor,
      updateUser,
    });
  }
}

export default UpdateProfessorUseCase;
