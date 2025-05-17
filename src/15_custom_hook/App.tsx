import { useReducer } from "react";
import AddUserForm from "./AddUserForm/AddUserForm";
import "./index.scss";
import UserList from "./User/UserList";
import userReducer from "./userReducer";

const initialState = [
  { firstName: "Jan", lastName: "Kowalski", age: 16, id: 1 },
  { firstName: "Anna", lastName: "Nowak", age: 33, id: 2 },
  { firstName: "Piotr", lastName: "Kowalski", age: 43, id: 3 },
];

export default function App() {
  const [state, dispatch] = useReducer(userReducer, initialState);

  function addUser(newUser: IUser) {
    dispatch({ type: "ADD_USER", payload: newUser });
  }

  function editUser(id: number, editedUser: IUser) {
    dispatch({ type: "EDIT_USER", payload: { ...editedUser, id } });
  }

  function deleteUser(id: number) {
    dispatch({ type: "DELETE_USER", payload: { id } });
  }

  return (
    <div className="grid grid-col-2">
      <AddUserForm addUser={addUser} />
      <UserList users={state} deleteUser={deleteUser} />
    </div>
  );
}
