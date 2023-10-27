import { sign } from "jsonwebtoken";
import { compare } from "bcrypt";
import { inject, injectable } from "tsyringe";
import { IUserRepository } from "../../../../domain/repositories/IUserRepository";
import { IAuth, ITokenAuth } from "../../../../domain/useCases/user/IAuth";
import UnauthorizedError from "../../../../presentation/erros/UnauthorizedError";

@injectable()
class AuthUserUseCase implements IAuth {
  constructor(@inject("UserRepository") private userRepository: IUserRepository) {}

  async execute(email: string, password: string): Promise<ITokenAuth> {
    const user = await this.userRepository.findBy({ email });

    if (!user) {
      throw new UnauthorizedError("Email ou senha incorreto");
    }

    const passwordValidation = await compare(password, user.password);

    if (!passwordValidation) {
      throw new UnauthorizedError("Email ou senha incorreto");
    }

    let status_id: string;
    if (user.status === "aluno") {
      status_id = user.id_aluno;
    }

    if (user.status === "professor") {
      status_id = user.id_professor;
    }

    if (user.status === "departamento") {
      status_id = user.id_departamento.toString();
    }

    const token = sign({}, `${process.env.SC_KEY}`, {
      subject: status_id,
      expiresIn: "10d",
    });
    return {
      token: token,
    };
  }
}
export default AuthUserUseCase;
