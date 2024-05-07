export interface UserEntityProps {
  id?: string;
  password: string;
  email: string;
  status: "departamento" | "professor" | "aluno";
  id_departamento?: number;
  id_professor?: string;
  id_aluno?: string;
}

export default class UserEntity {
  private id?: string;
  private password: string;
  private email: string;
  private status: "departamento" | "professor" | "aluno";
  private id_departamento?: number;
  private id_professor?: string;
  private id_aluno?: string;

  constructor(data: UserEntityProps) {
    this.validateEmail(data.email);
    this.id = data.id;
    this.password = data.password;
    this.email = data.email;
    this.status = data.status;
    this.id_departamento = data.id_departamento;
    this.id_professor = data.id_professor;
    this.id_aluno = data.id_aluno;
  }

  validateEmail(email: string) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      throw new Error("Email Inválido");
    }
    return;
  }
}
