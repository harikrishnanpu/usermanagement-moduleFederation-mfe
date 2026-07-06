import type { CreateUserInput, PublicUser, UserRecord } from "./types.js";

export class UserManager {
  private users: UserRecord[] = [];
  private nextId = 1;

  findByEmail(email: string): UserRecord | undefined {
    return this.users.find((user) => user.email === email);
  }

  findById(id: number): UserRecord | undefined {
    return this.users.find((user) => user.id === id);
  }

  create(input: CreateUserInput): UserRecord {
    const user: UserRecord = {
      id: this.nextId++,
      name: input.name,
      email: input.email,
      password: input.password,
    };

    this.users.push(user);
    return user;
  }

  toPublic(user: UserRecord): PublicUser {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
    };
  }
}
