import { inject, injectable } from "tsyringe";
import { IDisciplinaRepository } from "../../../../domain/repositories/IDisciplinaRepository";
import { IUpdateDisciplina } from "../../../../domain/useCases/disciplina/IUpdateDisciplina";
import { Disciplina } from "@prisma/client";
import DataConflictError from "../../../../presentation/erros/DataConflictError";
import DataNotFoundError from "../../../../presentation/erros/DataNotFoundError";
import {
  DisciplinaAlreadyExists,
  DisciplinaNotFound,
} from "../../../../presentation/erros/Constants";
import { IUpdateDisciplinaDTO } from "../../../DTOs/disciplinaDTO";

@injectable()
class UpdateDisciplinaUseCase implements IUpdateDisciplina {
  constructor(
    @inject("DisciplinaRepository") private disciplinaRepository: IDisciplinaRepository
  ) {}

  async execute({ id, nome, carga_horaria }: IUpdateDisciplinaDTO): Promise<Disciplina> {
    if (!nome && !carga_horaria) {
      throw new Error("Requisição inválida");
    }

    const disciplina = await this.disciplinaRepository.findBy({ id });
    if (!disciplina) {
      throw new DataNotFoundError(DisciplinaNotFound);
    }

    if (nome) {
      const disciplinaExits = await this.disciplinaRepository.findBy({ nome });

      if (disciplinaExits) {
        throw new DataConflictError(DisciplinaAlreadyExists);
      }
    }

    return await this.disciplinaRepository.update({
      id,
      nome,
      carga_horaria,
    });
  }
}
export default UpdateDisciplinaUseCase;
