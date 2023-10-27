import { Curso } from "@prisma/client";
import { IUpdateCursoDTO } from "../../dtos/cursoDto";

interface IUpdateCurso {
  execute({ id, updateCurso }: IUpdateCursoDTO): Promise<Curso>;
}
export { IUpdateCurso };
