import AddUserForm from "./AddUserForm/AddUserForm";
import UserList from "./User/UserList";

export default function App() {
  return (
    <>
      <div className="grid grid-col-2">
        <AddUserForm />
        <UserList />
      </div>
    </>
  );
}
