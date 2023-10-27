import { User } from "@prisma/client";
import { IUserStatusDTO } from "../dtos/userDto";

interface IUserRepository {
  findBy(data: Partial<User>): Promise<User>;
  findByStatus(data: IUserStatusDTO): Promise<Partial<User>>;
}
export { IUserRepository };
