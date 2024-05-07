export interface DepartamentoEntityProps {
	id?: number;
	nome: string;
	carga_horaria: number;
}

export default class DisciplinaEntity {
	private id?: number;
	private nome: string;
	private carga_horaria: number;

	constructor(data: DepartamentoEntityProps) {
		this.id = data.id;
		this.nome = data.nome;
		this.carga_horaria = data.carga_horaria;
	}
	setId(id: number) {
		this.id = id;
	}

	update(nome: string, carga_horaria: number) {
		this.nome = nome;
		this.carga_horaria = carga_horaria;
	}
}
