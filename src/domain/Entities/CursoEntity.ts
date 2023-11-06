import AlunoEntity from "./AlunoEntity";
import DisciplinaEntity from "./DisciplinaEntity";
import CursoDisciplinaProfessorEntity from "./CursoDisciplinaProfessorEntity";

export interface CursoEntityProps {
  id?: number; //implementado no infra orm
  nome: string;
  id_departamento: number;
  disciplina: DisciplinaEntity[];
  curso_disciplina_professor: CursoDisciplinaProfessorEntity[];
  aluno: AlunoEntity[];
}

export default class CursoEntity {
  private props: CursoEntityProps;

  constructor(data: CursoEntityProps) {
    this.props.nome = data.nome;
    this.props.id_departamento = data.id_departamento;
  }

  setId(data: number) {
    this.props.id = data;
  }

  getProps() {
    return this.props;
  }
  update({ nome, id_departamento }: CursoEntityProps) {
    this.props.nome = nome;
    this.props.id_departamento = id_departamento;
  }
  addAluno(data: AlunoEntity[]) {
    this.props.aluno = data;
  }
  addDisciplina(data: DisciplinaEntity[]) {
    this.props.disciplina = data;
  }
}
