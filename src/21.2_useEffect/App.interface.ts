export interface IUser {
  firstName: string | undefined;
  lastName: string | undefined;
  age: number | undefined;
  skills?: string[] | undefined;
}

export interface IUserWithID extends IUser {
  id: number;
}
