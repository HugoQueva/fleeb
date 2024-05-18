export type User = {
  id: string;
  name: string;
};

export type UserExtended = {
  id: string;
  name: string;
  email: string;
};

export type RegisterUser = {
  name: string;
  email: string;
  password: string;
};

export type LoginUser = {
  email: string;
  password: string;
};
