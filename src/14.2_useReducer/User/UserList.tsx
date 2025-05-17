import { useState } from "react";
import type { IUserWithID } from "../App.interface";
import User from "./User";

interface IProps {
  users: IUserWithID[];
  deleteUser: (id: number) => void;
}

export default function UserList({
  users,
  deleteUser,
}: IProps): React.ReactElement {
  const [activeIndex, setActiveIndex] = useState<number | undefined>(undefined);

  function setActiveUser(index: number) {
    if (index === activeIndex) {
      setActiveIndex(undefined);
    } else {
      setActiveIndex(index);
    }
  }

  return (
    <div>
      <div className="grid grid-col-2 mb-1">
        <span>Imię</span>
        <span>Nazwisko</span>
      </div>
      {users.map((user, index) => (
        <User
          key={user.id}
          user={user}
          isActive={index === activeIndex}
          onClick={() => setActiveUser(index)}
          deleteUser={() => {
            deleteUser(user.id);
            setActiveIndex(undefined);
          }}
        />
      ))}
    </div>
  );
}
