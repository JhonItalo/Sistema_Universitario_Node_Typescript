export default class Curso {
  id: number;
  nome: string;
  id_departamento: number;

  constructor(data: Curso) {
    this.id = data.id;
    this.nome = data.nome;
    this.id_departamento = data.id_departamento;
  }
}
