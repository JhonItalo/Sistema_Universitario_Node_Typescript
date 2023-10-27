import { inject, injectable } from "tsyringe";
import { IUserRepository } from "../../../../domain/repositories/IUserRepository";
import { User } from "@prisma/client";
import DataNotFoundError from "../../../../presentation/erros/DataNotFoundError";

@injectable()
class FindUserByIdUseCase {
  constructor(@inject("UserRepository") private userRepository: IUserRepository) {}

  async execute(id: string): Promise<User> {
    const user = await this.userRepository.findBy({ id });
    if (!user) {
      throw new DataNotFoundError("User não existe no sistema");
    }
    return user;
  }
}

export default FindUserByIdUseCase;
