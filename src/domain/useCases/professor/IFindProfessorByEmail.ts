import { Professor } from "@prisma/client";

interface IFindProfessorByEmail {
  execute(email: string): Promise<Professor>;
}
export { IFindProfessorByEmail };
