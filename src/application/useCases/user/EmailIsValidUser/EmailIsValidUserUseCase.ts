import { inject, injectable } from "tsyringe";
import { IUserRepository } from "../../../../domain/repositories/IUserRepository";
import DataConflictError from "../../../../presentation/erros/DataConflictError";
import { EmailAlreadyExists } from "../../../../presentation/erros/Constants";

@injectable()
class EmailIsValidUserUseCase {
  constructor(@inject("UserRepository") private userRepository: IUserRepository) {}

  async execute(email: string): Promise<void> {
    const user = await this.userRepository.findBy({ email });

    if (user) {
      throw new DataConflictError(EmailAlreadyExists);
    }
    return;
  }
}

export default EmailIsValidUserUseCase;
