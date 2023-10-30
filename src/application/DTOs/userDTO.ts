interface IUpdateUserDTO {
  email?: string;
  password?: string;
}

interface IUserStatusDTO {
  id_aluno: string;
  id_professor: string;
  id_departamento: number;
}

export { IUpdateUserDTO, IUserStatusDTO };
