import { Professor } from "@prisma/client";

import { IUpdateProfessorUserDTO } from "../../dtos/professorDto";

interface IUpdateProfessor {
  execute({ id, email, updateProfessor, updateUser }: IUpdateProfessorUserDTO): Promise<Professor>;
}
export { IUpdateProfessor };
