import AlunoEntity from "./AlunoEntity";

export interface CursoDisciplinaProfessorEntityProps {
  id?: number; //implementado no infra orm
  id_curso: number;
  id_disciplina: number;
  id_professor: string;
  aluno: AlunoEntity[];
}
export default class CursoDisciplinaProfessorEntity {
  private props: CursoDisciplinaProfessorEntityProps;

  constructor(data: CursoDisciplinaProfessorEntityProps) {
    this.props.id_curso = data.id_curso;
    this.props.id_disciplina = data.id_disciplina;
    this.props.id_professor = data.id_professor;
  }

  setId(data: number) {
    this.props.id = data;
  }

  getProps() {
    return this.props;
  }
  
  addAluno(aluno: AlunoEntity) {
    this.props.aluno.push(aluno);
  }
}
