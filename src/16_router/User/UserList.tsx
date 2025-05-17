import User from "./User";
import { useCollapse } from "../hooks/useCollapse";
import { useFilteredCollection } from "../hooks/useFilteredCollection";

interface IProps {
  users: IUserWithID[];
  deleteUser: (id: number) => void;
}

export default function UserList({
  users,
  deleteUser,
}: IProps): React.ReactElement {
  const { activeIndex, setActive } = useCollapse();

  const { filteredCollection, search, setSearch } = useFilteredCollection(
    users,
    "firstName"
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Szukaj..."
        value={search}
        className="input"
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="grid grid-col-2 mb-1">
        <span>Imię</span>
        <span>Nazwisko</span>
      </div>
      {filteredCollection.map((user, index) => (
        <User
          key={user.id}
          user={user}
          isActive={index === activeIndex}
          onClick={() => setActive(index)}
          deleteUser={() => {
            deleteUser(user.id);
            setActive(undefined);
          }}
        />
      ))}
    </div>
  );
}
