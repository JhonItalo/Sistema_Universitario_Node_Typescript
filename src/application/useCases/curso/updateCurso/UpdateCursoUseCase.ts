import { inject, injectable } from "tsyringe";
import { ICursoRepository } from "../../../../domain/repositories/ICursoRepository";
import { IUpdateCurso } from "../../../../domain/useCases/curso/IUpdateCurso";
import { Curso } from "@prisma/client";
import DataNotFoundError from "../../../../presentation/erros/DataNotFoundError";
import DataConflictError from "../../../../presentation/erros/DataConflictError";
import { CursoAlreadyExists, CursoNotFound } from "../../../../presentation/erros/Constants";
import { IUpdateCursoDTO } from "../../../../domain/dtos/cursoDto";

@injectable()
class UpdateCursoUseCase implements IUpdateCurso {
  constructor(@inject("CursoRepository") private cursoRepository: ICursoRepository) {}

  async execute({ id, nome, id_departamento }: IUpdateCursoDTO): Promise<Curso> {
    if (!nome && !id_departamento) {
      throw new Error("Requisição inválida");
    }
    const curso = await this.cursoRepository.findBy({ id });

    if (!curso) {
      throw new DataNotFoundError(CursoNotFound);
    }

    const cursoExists = await this.cursoRepository.findBy({
      nome: nome ? nome : curso.nome,
      id_departamento: id_departamento ? id_departamento : curso.id_departamento,
    });
    if (cursoExists) {
      throw new DataConflictError(CursoAlreadyExists);
    }

    return await this.cursoRepository.update({ id, nome, id_departamento });
  }
}
export default UpdateCursoUseCase;
