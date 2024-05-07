interface IAlunoDTO {
	id: string;
	nome: string;
	email: string;
	cpf: string;
	sexo: 'M' | 'F';
	telefone: string;
	createtAt?: Date;
	id_turma: number;
	id_curso: number;
}

interface ICreateAlunoDTO {
	nome: string;
	email: string;
	cpf: string;
	telefone: string;
	sexo: 'M' | 'F';
	id_curso: number;
	id_turma: number;
}

interface IUpdateAlunoDTO {
	id: string;
	nome?: string;
	email?: string;
	telefone?: string;
	sexo?: 'M' | 'F';
	id_curso?: number;
	id_turma?: number;
}
interface ICreateAlunoUserDTO {
	nome: string;
	email: string;
	cpf: string;
	telefone: string;
	sexo: 'M' | 'F';
	id_curso: number;
	id_turma: number;
	password: string;
}

interface IUpdateAlunoUserDTO {
	id: string;
	email: string;
	updateAluno: IUpdateAlunoDTO;
	updateUser: {
		email: string;
	};
}
export { ICreateAlunoDTO, IUpdateAlunoDTO, IAlunoDTO, ICreateAlunoUserDTO, IUpdateAlunoUserDTO };
