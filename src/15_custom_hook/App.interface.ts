export interface IUser {
  firstName: string | undefined;
  lastName: string | undefined;
  age: number | undefined;
}

export interface IUserWithID extends IUser {
  id: number;
}
