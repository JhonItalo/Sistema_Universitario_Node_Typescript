import { Professor } from "@prisma/client";

interface IFindProfessorById {
  execute(id: string): Promise<Professor>;
}
export { IFindProfessorById };
