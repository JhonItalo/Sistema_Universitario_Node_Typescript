import { Curso } from "@prisma/client";
import { ICreateCursoDTO } from "../../dtos/cursoDto";

interface ICreateCurso {
  execute({ nome, id_departamento }: ICreateCursoDTO): Promise<Curso>;
}
export { ICreateCurso };
