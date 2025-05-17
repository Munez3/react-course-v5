import { useState } from "react";
import AddUserForm from "./AddUserForm";
import User from "./User";

export default function App() {
  const [users, setUsers] = useState([
    { firstName: "Jan", lastName: "Kowalski", age: 16, id: 1 },
    { firstName: "Anna", lastName: "Nowak", age: 33, id: 2 },
    { firstName: "Piotr", lastName: "Kowalski", age: 43, id: 3 },
  ]);

  return (
    <>
      <AddUserForm />
      <br />
      <br />
      <br />
      <div>Lista</div>
      {users.map((user) => (
        <div key={user.id}>
          <User
            firstName={user.firstName}
            lastName={user.lastName}
            age={user.age}
          />
        </div>
      ))}
    </>
  );
}
