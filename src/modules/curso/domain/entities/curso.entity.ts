export interface CursoEntityProps {
	id?: number;
	nome: string;
	id_departamento: number;
}

export default class CursoEntity {
	private id?: number;
	private nome: string;
	private id_departamento: number;

	constructor(data: CursoEntityProps) {
		this.id = data.id;
		this.nome = data.nome;
		this.id_departamento = data.id_departamento;
	}

	setId(data: number) {
		this.id = data;
	}

	update({ nome, id_departamento }: CursoEntityProps) {
		this.nome = nome;
		this.id_departamento = id_departamento;
	}
}
