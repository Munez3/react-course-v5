import { useState } from "react";
import User from "./User";

export default function App() {
  const [firstName, setFirstName] = useState("Jan");
  const [lastName, setLastName] = useState("Kowalski");
  const [age, setAge] = useState(23);

  return <User firstName={firstName} lastName={lastName} age={age} />;
}
