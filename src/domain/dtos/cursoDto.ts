interface ICreateCursoDTO {
  nome: string;
  id_departamento: number;
}
interface IUpdateCursoDTO {
  id: number;
  nome: string | undefined;
  id_departamento: number | undefined;
}

export { ICreateCursoDTO, IUpdateCursoDTO };
