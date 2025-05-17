import { useState } from "react";
import User from "./User";

export default function App() {
  const [user, setUser] = useState({
    firstName: "Jan",
    lastName: "Kowalski",
    age: 23,
  });

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
    </>
  );
}
