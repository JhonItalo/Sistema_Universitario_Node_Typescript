import { Professor } from "@prisma/client";
import { ICreateProfessorDTO } from "../../repositories/IProfessorRepository";

interface ICreateProfessor {
  execute(professor: ICreateProfessorDTO, password: string): Promise<Professor>;
}

export { ICreateProfessor };
