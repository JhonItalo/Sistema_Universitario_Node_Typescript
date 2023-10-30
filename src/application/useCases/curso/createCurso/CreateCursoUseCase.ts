import { inject, injectable } from "tsyringe";
import { ICursoRepository } from "../../../../domain/repositories/ICursoRepository";
import { ICreateCurso } from "../../../../domain/useCases/curso/ICreateCurso";
import { Curso } from "@prisma/client";
import DataConflictError from "../../../../presentation/erros/DataConflictError";
import { CursoAlreadyExists } from "../../../../presentation/erros/Constants";
import { ICreateCursoDTO } from "../../../DTOs/cursoDTO";

@injectable()
class CreateCursoUsecase implements ICreateCurso {
  constructor(@inject("CursoRepository") private cursorepository: ICursoRepository) {}

  async execute({ nome, id_departamento }: ICreateCursoDTO): Promise<Curso> {
    const cursoExist = await this.cursorepository.findBy({
      nome,
      id_departamento,
    });
    if (cursoExist) {
      throw new DataConflictError(CursoAlreadyExists);
    }
    return await this.cursorepository.create({ nome, id_departamento });
  }
}
export default CreateCursoUsecase;
