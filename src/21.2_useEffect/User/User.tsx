import { Link } from "react-router-dom";
import UserDetails from "./UserDetails";
import "./user.scss";
interface IProps {
  user: IUserWithID;
  isActive: boolean;
  onClick: () => void;
  deleteUser: () => void;
}

export default function User({
  user,
  isActive,
  onClick,
  deleteUser,
}: IProps): React.ReactElement {
  const { firstName, lastName, age, id } = user;

  if (!firstName && !lastName) {
    return <>Brak danych</>;
  }

  return (
    <div className="user">
      <div className="grid grid-col-3">
        <span onClick={onClick}>{firstName ? firstName : "- -"}</span>
        <span onClick={onClick}>{lastName && <strong>{lastName}</strong>}</span>
        <Link to={`${id}`}>Profil</Link>
      </div>
      {isActive && <UserDetails age={age} deleteUser={deleteUser} />}
    </div>
  );
}
