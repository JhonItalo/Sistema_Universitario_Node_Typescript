export default class Turma {
	id: number;
	nome: string;
	id_curso: number;

	constructor(data: Turma) {
		this.id = data.id;
		this.nome = data.nome;
		this.id_curso = data.id_curso;
	}
}
