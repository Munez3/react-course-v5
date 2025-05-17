import { useState } from "react";
import type { IUser } from "./App.interface";

interface IProps {
  addUser: (user: IUser) => void;
}

export default function AddUserForm({ addUser }: IProps): React.ReactElement {
  const [user, setUser] = useState<IUser>({
    firstName: "",
    lastName: "",
    age: undefined,
  });

  function handlechange(e: React.ChangeEvent<HTMLInputElement>) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    addUser(user);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Imię
            <input
              onChange={handlechange}
              name="firstName"
              placeholder="Imię"
            />
          </label>
        </div>
        <div>
          <label>
            Nazwisko
            <input
              onChange={handlechange}
              name="lastName"
              placeholder="Nazwisko"
            />
          </label>
        </div>
        <div>
          <label>
            Wiek
            <input
              onChange={handlechange}
              type="number"
              name="age"
              placeholder="Wiek"
            />
          </label>
        </div>
        <button type="submit">Dodaj</button>
      </form>
    </>
  );
}
