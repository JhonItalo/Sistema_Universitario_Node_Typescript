export default class Departamento {
  id: number;
  nome: string;

  constructor(data: Departamento) {
    this.id = data.id;
    this.nome = data.nome;
  }
}
