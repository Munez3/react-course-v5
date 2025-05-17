import { useState } from "react";
import AddUserForm from "./AddUserForm/AddUserForm";
import type { IUser, IUserWithID } from "./App.interface";
import "./index.scss";
import UserList from "./User/UserList";

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

  function editUser(id: number, editedUser: IUser) {
    const editedUsers = users.map((user) =>
      user.id === id ? { ...user, ...editedUser } : user
    );
    setUsers(editedUsers);
  }

  function deleteUser(id: number) {
    setUsers(users.filter((user) => user.id !== id));
  }

  return (
    <div className="grid grid-col-2">
      <AddUserForm addUser={addUser} />
      <UserList users={users} deleteUser={deleteUser} />
    </div>
  );
}
