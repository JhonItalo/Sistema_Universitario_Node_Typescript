import { Professor } from "@prisma/client";

interface IListProfessor {
  execute(): Promise<Professor[]>;
}
export { IListProfessor };
