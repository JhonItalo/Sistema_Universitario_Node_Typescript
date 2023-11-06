import { Curso } from "@prisma/client";
import { IUpdateCursoDTO } from "../../DTOs/cursoDTO";

interface IUpdateCurso {
  execute({ id, updateCurso }: IUpdateCursoDTO): Promise<Curso>;
}
export { IUpdateCurso };
