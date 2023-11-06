export interface DepartamentoEntityProps {
  id?: number;
  nome: string;
  carga_horaria: number;
}

export default class DisciplinaEntity {
  private props: DepartamentoEntityProps;

  constructor(data: DepartamentoEntityProps) {
    this.props.nome = data.nome;
    this.props.carga_horaria = data.carga_horaria;
  }
  setId(id: number) {
    this.props.id = id;
  }
  getProps() {
    return this.props;
  }
  update(nome: string, carga_horaria: number) {
    this.props.nome = nome;
    this.props.carga_horaria = carga_horaria;
  }
}
