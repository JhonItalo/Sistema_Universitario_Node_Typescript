import CursoDisciplinaProfessorEntity from "./CursoDisciplinaProfessorEntity";
import Disciplina from "./DisciplinaEntity";

export interface AlunoEntityProps {
  id?: string; //implementado no infra orm
  nome: string;
  email: string;
  cpf: string;
  sexo: "M" | "F";
  telefone: string;
  createtAt?: Date; //implementado no infra orm
  id_turma: number;
  id_curso: number;
  curso_disciplina_professor: CursoDisciplinaProfessorEntity[];
}

export default class AlunoEntity {
  private props: AlunoEntityProps;

  constructor(data: AlunoEntityProps) {
    this.validEmail(data.email);
    this.validCpf(data.cpf);
    this.validSexo(data.sexo);

    this.props.nome = data.nome;
    this.props.email = data.email;
    this.props.cpf = data.cpf;
    this.props.sexo = data.sexo;
    this.props.telefone = data.telefone;
    this.props.id_turma = data.id_turma;
    this.props.id_curso = data.id_curso;
  }

  getProps() {
    return this.props;
  }

  setId(id: string) {
    this.props.id = id;
  }

  setCreatedAt(createdAt: Date) {
    this.props.createtAt = createdAt;
  }

  private validEmail(email: string) {
    const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    if (!emailRegex.test(email)) {
      throw new Error("O email não corresponde ao formato esperado.");
    }
  }

  private validCpf(cpf: string) {
    const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    if (!cpfRegex.test(cpf)) {
      throw new Error("CPF não corresponde ao formato esperado");
    }
  }
  private validSexo(s: "M" | "F") {
    if (s != "M" && s != "F") {
      throw new Error("Sexo não corresponde ao formato esperado");
    }
  }

  updateAluno({ nome, email, cpf, sexo, telefone, id_turma, id_curso }: AlunoEntityProps) {
    this.validEmail(email);
    this.validCpf(cpf);
    this.validSexo(sexo);
    this.props.nome = nome;
    this.props.email = email;
    this.props.cpf = cpf;
    this.props.sexo = sexo;
    this.props.telefone = telefone;
    this.props.id_turma = id_turma;
    this.props.id_curso = id_curso;
  }

  addDisciplina(disciplina: CursoDisciplinaProfessorEntity[]) {
    this.props.curso_disciplina_professor = disciplina;
  }
}
