export interface IUserDTO {
	id: string;
	email: string;
	status: 'departamento' | 'professor' | 'aluno';
	id_departamento?: number;
	id_professor?: string;
	id_aluno?: string;
}
