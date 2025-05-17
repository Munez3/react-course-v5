import { useState } from "react";
import AddUserForm from "./AddUserForm";
import type { IUser, IUserWithID } from "./App.interface";
import User from "./User";

let id = 10;

export default function App() {
  const [users, setUsers] = useState<IUserWithID[]>([
    { firstName: "Jan", lastName: "Kowalski", age: 16, id: 1 },
    { firstName: "Anna", lastName: "Nowak", age: 33, id: 2 },
    { firstName: "Piotr", lastName: "Kowalski", age: 43, id: 3 },
  ]);

  function addUser(newUser: IUser) {
    const userWithId = { ...newUser, id: id++ };
    setUsers([...users, userWithId]);
  }

  return (
    <>
      <AddUserForm addUser={addUser} />
      <br />
      <br />
      <br />
      <div>Lista</div>
      {users.map((user) => (
        <div key={user.id}>
          <User user={user} />
        </div>
      ))}
    </>
  );
}
