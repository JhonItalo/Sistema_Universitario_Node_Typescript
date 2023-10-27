
interface ITokenAuth {
  token: string;
}

interface IAuth {
  execute(email: string, password: string): Promise<ITokenAuth>;
}
export { IAuth, ITokenAuth };
