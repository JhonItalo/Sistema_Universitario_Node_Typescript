interface ITurmaDTO {
	id: number;
	nome: string;
	id_curso: number;
}

interface ICreateTurmaDTO {
	nome: string;
	id_curso: number;
}
interface IUpdateTurmaDTO {
	id: number;
	nome: string | undefined;
	id_curso: number | undefined;
}

export { ITurmaDTO, ICreateTurmaDTO, IUpdateTurmaDTO };
