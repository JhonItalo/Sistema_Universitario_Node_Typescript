interface ICreateDisciplinaDTO {
  nome: string;
  carga_horaria: number;
}
interface IUpdateDisciplinaDTO {
  id: number;
  nome?: string;
  carga_horaria?: number;
}

export { ICreateDisciplinaDTO, IUpdateDisciplinaDTO };
