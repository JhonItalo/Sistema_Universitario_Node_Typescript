import { Professor } from "@prisma/client";

import { IUpdateProfessorUserDTO } from "../../../application/DTOs/professorDTO";

interface IUpdateProfessor {
  execute({ id, email, updateProfessor, updateUser }: IUpdateProfessorUserDTO): Promise<Professor>;
}
export { IUpdateProfessor };
