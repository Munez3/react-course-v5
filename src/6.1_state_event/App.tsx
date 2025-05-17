import { useState } from "react";
import User from "./User";

export default function App() {
  const [firstName, setFirstName] = useState("Jan");
  const [lastName, setLastName] = useState("Kowalski");
  const [age, setAge] = useState(23);

  return (
    <>
      <div>
        <label>
          Imię
          <input
            onChange={(e) => {
              setFirstName(e.target.value);
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
              setLastName(e.target.value);
            }}
            name="lastName"
            placeholder="Nazwisko"
          />
        </label>
      </div>
      <User firstName={firstName} lastName={lastName} age={age} />;
    </>
  );
}
