import { IUserDTO } from '../../application/dtos/user.dto';
import UseCaseInterface from '../../../../shared/application/useCase.interface';
export interface IUserFacade {
	//create(input: ICreateUserDTO): Promise<Partial<IUserDTO>>;
	findBy(input: Partial<IUserDTO>): Promise<Partial<IUserDTO>>;
	/*   updateUser(input: IUpdateUserDTO): Promise<IUserDTO>;
  findUser(id: string): Promise<IUserDTO>;
  deleteUser(id: string): Promise<void>; */
}

export interface UserFacadeProps {
	//createUserUseCase: UseCaseInterface;
	findUserUseCase: UseCaseInterface;
	/*  updateUserUseCase: IUpdateUserUseCase;
  findUserUseCase: IFindUserUseCase;
  deleteUserUseCase: IDeleteUserUseCase; */
}

export default class UserFacade implements IUserFacade {
	private createUserUseCase: UseCaseInterface;
	private findUserUseCase: UseCaseInterface;

	constructor(props: UserFacadeProps) {
		//this.createUserUseCase = props.createUserUseCase;
		this.findUserUseCase = props.findUserUseCase;
		/*     this.props.updateUserUseCase = props.updateUserUseCase;
    this.props.findUserUseCase = props.findUserUseCase;
    this.props.deleteUserUseCase = props.deleteUserUseCase; */
	}

	/* create(input: ICreateUserDTO): Promise<Partial<IUserDTO>> {
		return this.createUserUseCase.execute(input);
	} */
	findBy(input: Partial<IUserDTO>): Promise<Partial<IUserDTO>> {
		return this.findUserUseCase.execute(input);
	}
	/*  updateUser(input: IUpdateUserDTO): Promise<IUserDTO> {
    return this.props.updateUserUseCase.execute(input);
  }
  findUser(id: string): Promise<IUserDTO> {
    return this.props.findUserUseCase.execute(id);
  }
  deleteUser(id: string): Promise<void> {
    return this.props.deleteUserUseCase.execute(id);
  } */
}
