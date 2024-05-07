import { IUserDTO } from '../../application/dtos/user.dto';
import { User } from '@prisma/client';
export default interface IUserRepository {
	findBy(input: Partial<IUserDTO>): Promise<Partial<User>>;
	findByStatusId(input: Partial<IUserDTO>): Promise<Partial<User>>;
	findByEmailWithPassword(email: string): Promise<User>;
}
