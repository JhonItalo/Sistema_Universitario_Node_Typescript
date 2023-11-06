export default interface IProfessorRepositoryInMemory {
  hasCache<T>(key: string): Promise<T | null>;

  setCache<T>(key: string, data: T): Promise<void>;

  resetCache(key: string): Promise<void>;
}
