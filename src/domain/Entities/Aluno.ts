export default class ALuno {
  id: number;
  nome: string;
  email: string;
  cpf: string;
  sexo: "M" | "F";
  telefone: string;
  createtAt: Date;
  id_turma: number;
  id_curso: number;

  constructor(data: ALuno) {
    this.id = data.id;
    this.nome = data.nome;
    this.email = data.email;
    this.cpf = data.cpf;
    this.sexo = this.sexo;
    this.telefone = this.telefone;
    this.id_turma = this.id_turma;
    this.id_curso = this.id_curso;
  }
}
