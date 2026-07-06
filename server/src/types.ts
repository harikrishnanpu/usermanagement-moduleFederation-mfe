export type UserRecord = {
  id: number;
  name: string;
  email: string;
  password: string;
};

export type PublicUser = {
  id: number;
  name: string;
  email: string;
};

export type CreateUserInput = {
  name: string;
  email: string;
  password: string;
};
