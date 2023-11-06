import { inject, injectable } from "tsyringe";
import { IUserRepository } from "../../../../domain/repositories/IUserRepository";
import { User } from "@prisma/client";

@injectable()
class FindUserByStatusIdUseCase {
  constructor(@inject("UserRepository") private userRepository: IUserRepository) {}

  async execute(id: string): Promise<Partial<User> | null> {
    const id_aluno = id;

    const id_professor = id;

    let id_departamento = Number(id);

    if (isNaN(id_departamento)) {
      id_departamento = 999999999;
    }

    const user = await this.userRepository.findByStatus({
      id_aluno,
      id_professor,
      id_departamento,
    });

    if (!user) {
      return null;
    }
    return user;
  }
}

export default FindUserByStatusIdUseCase;
