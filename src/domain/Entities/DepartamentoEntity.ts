import CursoEntity from "./CursoEntity";
import ProfessorEntity from "./ProfessorEntity";

export interface DepartamentoEntityProps {
  id?: number; //implementado no infra orm
  nome: string;
  curso: CursoEntity[];
  professor: ProfessorEntity[];
}

export default class DepartamentoEntity {
  private props: DepartamentoEntityProps;

  constructor(data: DepartamentoEntityProps) {
    this.props.nome = data.nome;
    this.props.curso = [];
    this.props.professor = [];
  }

  setId(data: number) {
    this.props.id = data;
  }

  getProps() {
    return this.props;
  }

  addCurso(data: CursoEntity[]) {
    this.props.curso = data;
  }
  addProfessor(data: ProfessorEntity[]) {
    this.props.professor = data;
  }
}
