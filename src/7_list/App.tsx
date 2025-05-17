import { useState } from "react";
import User from "./User";

export default function App() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    age: 20,
  });

  const [users, setUsers] = useState([
    { firstName: "Jan", lastName: "Kowalski", age: 23, id: 1 },
    { firstName: "Anna", lastName: "Nowak", age: 33, id: 2 },
    { firstName: "Piotr", lastName: "Kowalski", age: 43, id: 3 },
  ]);

  return (
    <>
      <div>
        <label>
          Imię
          <input
            onChange={(e) => {
              setUser({ ...user, firstName: e.target.value });
            }}
            name="firstName"
            placeholder="Imię"
          />
        </label>
      </div>
      <div>
        <label>
          Nazwisko
          <input
            onChange={(e) => {
              setUser({ ...user, lastName: e.target.value });
            }}
            name="lastName"
            placeholder="Nazwisko"
          />
        </label>
      </div>
      <User
        firstName={user.firstName}
        lastName={user.lastName}
        age={user.age}
      />
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
