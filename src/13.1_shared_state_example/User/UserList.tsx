import type { IUserWithID } from "../App.interface";
import User from "./User";

interface IProps {
  users: IUserWithID[];
}

export default function UserList({ users }: IProps): React.ReactElement {
  return (
    <div>
      <div className="grid grid-col-2 mb-1">
        <span>Imię</span>
        <span>Nazwisko</span>
      </div>
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
}
