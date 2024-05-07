interface IDisciplinaDTO {
	id: number;
	nome: string;
	carga_horaria: number;
}

interface ICreateDisciplinaDTO {
	nome: string;
	carga_horaria: number;
}
interface IUpdateDisciplinaDTO {
	id: number;
	nome?: string;
	carga_horaria?: number;
}

export { IDisciplinaDTO, ICreateDisciplinaDTO, IUpdateDisciplinaDTO };
