import { Curso } from "@prisma/client";
import { ICreateCursoDTO } from "../../../application/DTOs/cursoDTO";

interface ICreateCurso {
  execute({ nome, id_departamento }: ICreateCursoDTO): Promise<Curso>;
}
export { ICreateCurso };
