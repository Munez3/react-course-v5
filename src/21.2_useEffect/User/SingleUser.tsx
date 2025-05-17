import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api";

interface IProps {}

export default function SingleUser({}: IProps): React.ReactElement | null {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<IUserWithID | undefined>(undefined);

  // useEffect(() => {
  //   api.get<IUserWithID>(`/users/${id}`).then((response) => {
  //     setUser(response.data);
  //   });
  // }, []);

  useEffect(() => {
    api.get<IUserWithID>(`/users/${id}`).then((response) => {
      setUser(response.data);
    });

    return () => {
      setUser(undefined);
    };
  }, [id]);

  if (!user) return <>Brak użytkownika</>;

  return (
    <div className="profile">
      <h1 className="profile__name">
        {user.firstName} {user.lastName}
      </h1>
      <p className="profile__age">Wiek: {user.age}</p>
      <p className="profile__email">Skille: {user.skills?.join(", ")}</p>
    </div>
  );
}
