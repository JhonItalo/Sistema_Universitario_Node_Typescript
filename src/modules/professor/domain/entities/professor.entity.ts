export default class ProfessorEntity {
	id: number;
	nome: string;
	email: string;
	cpf: string;
	sexo: 'M' | 'F';
	telefone: string;
	createdAt: Date;
	id_departamento: number;

	constructor(data: ProfessorEntity) {
		this.id = data.id;
		this.nome = data.nome;
		this.email = data.email;
		this.cpf = data.cpf;
		this.sexo = data.sexo;
		this.telefone = data.telefone;
		this.id_departamento = data.id_departamento;
	}
}
