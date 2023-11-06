import IAlunoRepositoryInMemory from "../../../domain/repositories/inMemory/IAlunoRepositoryInMemory";
import { RedisClient } from "../../../infra/database/redisClient";

export default class AlunoRepositoryInMemory implements IAlunoRepositoryInMemory {
  async hasCache<T>(key: string): Promise<T | null> {
    const valor = await RedisClient.get(key);
    return valor ? JSON.parse(valor) : null;
  }

  async setCache<T>(key: string, data: T) {
    RedisClient.set(key, JSON.stringify(data), { EX: 3600 });
  }
  async resetCache(key: string) {
    RedisClient.del(key);
  }
}
