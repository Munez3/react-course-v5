import type { IUser } from "../App.interface";
import "./user.scss";
interface IProps {
  user: IUser;
}

export default function User({ user }: IProps): React.ReactElement {
  const { firstName, lastName, age } = user;

  if (!firstName && !lastName) {
    return <>Brak danych</>;
  }

  return (
    <div className="user grid grid-col-3">
      <span>{firstName ? firstName : "- -"}</span>
      <span>{lastName && <strong>{lastName}</strong>}</span>
      <span>
        {age} {age && age > 18 && <i>pełnoletni</i>}
      </span>
    </div>
  );
}
