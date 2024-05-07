interface IProfessorDTO {
	id: string;
	nome: string;
	email: string;
	cpf: string;
	telefone: string;
	sexo: 'M' | 'F';
	id_departamento: number;
	createdAt: Date;
}

interface ICreateProfessorDTO {
	nome: string;
	email: string;
	cpf: string;
	telefone: string;
	sexo: 'M' | 'F';
	id_departamento: number;
}

interface ICreateProfessorUserDTO {
	nome: string;
	email: string;
	cpf: string;
	telefone: string;
	sexo: 'M' | 'F';
	id_departamento: number;
	password: string;
}

interface IUpdateProfessorDTO {
	id: string;
	nome?: string;
	email?: string;
	telefone?: string;
	sexo?: 'M' | 'F';
	id_departamento?: number;
}

interface IUpdateProfessorUserDTO {
	id: string;
	email: string;
	updateProfessor: IUpdateProfessorDTO;
	updateUser: {
		email: string;
	};
}

export {
	IProfessorDTO,
	ICreateProfessorDTO,
	ICreateProfessorUserDTO,
	IUpdateProfessorDTO,
	IUpdateProfessorUserDTO,
};
