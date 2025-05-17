import { useState } from "react";
import type { IUser } from "../App.interface";
import "./user.scss";
import UserDetails from "./UserDetails";
interface IProps {
  user: IUser;
}

export default function User({ user }: IProps): React.ReactElement {
  const { firstName, lastName, age } = user;

  const [isOpen, setIsOpen] = useState(false);

  if (!firstName && !lastName) {
    return <>Brak danych</>;
  }

  return (
    <div className="user">
      <div className="grid grid-col-2" onClick={() => setIsOpen(!isOpen)}>
        <span>{firstName ? firstName : "- -"}</span>
        <span>{lastName && <strong>{lastName}</strong>}</span>
      </div>
      {isOpen && <UserDetails age={age} />}
    </div>
  );
}
