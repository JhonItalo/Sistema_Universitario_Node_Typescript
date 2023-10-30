interface ICreateTurmaDTO {
  nome: string;
  id_curso: number;
}
interface IUpdateTurmaDTO {
  id: number;
  nome: string | undefined;
  id_curso: number | undefined;
}

export { ICreateTurmaDTO, IUpdateTurmaDTO };
