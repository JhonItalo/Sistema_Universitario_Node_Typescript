
interface IDeleteAluno {
  execute(id: string): Promise<void>;
}
export { IDeleteAluno };
