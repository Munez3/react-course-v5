import type { PropsWithChildren } from "react";
import { createContext, useContext, useReducer } from "react";
import api from "./api";
import type { IUser, IUserWithID } from "./App.interface";
import userReducer from "./userReducer";

const initialState: IUserWithID[] = [];

const UserContext = createContext<{
  users: IUserWithID[];
  addUser: (newUser: IUser) => void;
  deleteUser: (id: number) => void;
}>({ users: [], addUser: () => {}, deleteUser: () => {} });

export function UserContextProvider({
  children,
}: PropsWithChildren): React.ReactElement {
  const [state, dispatch] = useReducer(userReducer, initialState);

  async function addUser(newUser: IUser) {
    try {
      const resposne = await api.post("/users", newUser);
      dispatch({ type: "ADD_USER", payload: resposne.data });
    } catch (error) {
      console.error(error);
    }
  }

  function editUser(id: number, editedUser: IUser) {
    dispatch({ type: "EDIT_USER", payload: { ...editedUser, id } });
  }

  async function deleteUser(id: number) {
    try {
      await api.delete(`/users/${id}`);
      dispatch({ type: "DELETE_USER", payload: { id } });
    } catch (error) {
      console.error(error);
    }
  }

  async function getUsers() {
    try {
      const response = await api<IUserWithID[]>("/users");
      dispatch({ type: "SET_USERS", payload: response.data });
    } catch (error) {
      console.error(error);
    }
  }

  //**! DO NOT DO THIS */
  //**? WHY DOES IT FAIL?  */
  // getUsers();

  return (
    <UserContext.Provider value={{ users: state, addUser, deleteUser }}>
      {children}
    </UserContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export default function useUserContext() {
  return useContext(UserContext);
}
