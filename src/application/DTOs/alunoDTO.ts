interface ICreateAlunoDTO {
  nome: string;
  email: string;
  cpf: string;
  telefone: string;
  sexo: "M" | "F";
  id_curso: number;
  id_turma: number;
}

interface ICreateAlunoUserDTO {
  nome: string;
  email: string;
  cpf: string;
  telefone: string;
  sexo: "M" | "F";
  id_curso: number;
  id_turma: number;
  password: string;
}

interface IUpdateAlunoDTO {
  id: string;
  nome?: string;
  email?: string;
  telefone?: string;
  sexo?: "M" | "F";
  id_curso?: number;
  id_turma?: number;
}

interface IUpdateAlunoUserDTO {
  id: string;
  email?: string;
  updateAluno: IUpdateAlunoDTO;
  updateUser: {
    email: string;
  };
}

export { ICreateAlunoDTO, ICreateAlunoUserDTO, IUpdateAlunoDTO, IUpdateAlunoUserDTO };
