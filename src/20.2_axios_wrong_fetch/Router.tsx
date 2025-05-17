import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.scss";
import Home from "./Home";
import { UserContextProvider } from "./UserContext";
import AddUserForm from "./AddUserForm/AddUserForm";
import UserList from "./User/UserList";
import App from "./App";

/***
 * npx json-server --watch db.json --port 3001 --delay 150
 */

export default function Router() {
  return <RouterProvider router={router} />;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <UserContextProvider>
        <App />
      </UserContextProvider>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "users",
        element: <UserList />,
      },
      {
        path: "add",
        element: <AddUserForm />,
      },
    ],
  },
]);
