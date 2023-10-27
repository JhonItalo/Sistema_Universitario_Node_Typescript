interface IBaseRepository<R> {
  create<T>(data: T): Promise<R>;

  update<T>(data: T): Promise<R>;

  delete<T>(data: T): Promise<void>;

  findBy<T>(data: T): Promise<R>;

  findByMany<T>(data: T): Promise<R[]>;

  findAll(): Promise<R[]>;
}

export default IBaseRepository;
