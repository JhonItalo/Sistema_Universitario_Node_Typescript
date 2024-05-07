import * as bcrypt from "bcrypt";

export default class EncyptAdpater {
  generateHash(key: string, range: number): Promise<string> {
    return bcrypt.hash(key, range);
  }
  checkHash(key: string, hashKey: string) {
    return bcrypt.compare(key, hashKey);
  }
}
