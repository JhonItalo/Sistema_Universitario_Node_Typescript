export default class User {
  id: String;
  password: string;
  email: String;
  status: UserStatus;
  id_departamento?: number;
  id_professor?: String;
  id_aluno?: String;

  constructor(data: User) {
    this.id = data.id;
    this.password = data.password;
    this.email = data.email;
    this.status = data.status;
    this.id_departamento = data.id_departamento;
    this.id_professor = data.id_professor;
    this.id_aluno = data.id_aluno;
  }
}

enum UserStatus {
  departamento,
  professor,
  aluno,
}
