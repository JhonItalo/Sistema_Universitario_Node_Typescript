export default class Disciplina {
  id: number;
  nome: string;
  carga_horaria: number;

  constructor(data: Disciplina) {
    this.id = data.id;
    this.nome = data.nome;
    this.carga_horaria = data.carga_horaria;
  }
}
