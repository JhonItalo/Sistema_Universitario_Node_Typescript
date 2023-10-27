interface IDeleteProfessor {
  execute(id: string): Promise<void>;
}
export { IDeleteProfessor };
