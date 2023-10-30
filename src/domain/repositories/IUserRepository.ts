import { User } from "@prisma/client";
import { IUserStatusDTO } from "../../application/DTOs/userDTO";

interface IUserRepository {
  findBy(data: Partial<User>): Promise<User>;
  findByStatus(data: IUserStatusDTO): Promise<Partial<User>>;
}
export { IUserRepository };
