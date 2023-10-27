
interface IChangeDisciplina {
  execute(id_aluno: string, disciplina: number[]): Promise<any>;
}
export { IChangeDisciplina };
