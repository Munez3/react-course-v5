import AddUserForm from "./AddUserForm/AddUserForm";
import UserList from "./User/UserList";
import useUserContext from "./UserContext";

export default function App() {
  const { users, addUser, deleteUser } = useUserContext();

  return (
    <>
      <div className="grid grid-col-2">
        <AddUserForm addUser={addUser} />
        <UserList users={users} deleteUser={deleteUser} />
      </div>
    </>
  );
}
