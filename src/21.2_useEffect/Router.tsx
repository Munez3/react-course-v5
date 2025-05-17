import { RouterProvider, createBrowserRouter } from "react-router";
import AddUserForm from "./AddUserForm/AddUserForm";
import App from "./App";
import Home from "./Home/Home";
import "./index.scss";
import SingleUser from "./User/SingleUser";
import UserList from "./User/UserList";
import { UserContextProvider } from "./UserContext";

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
        children: [
          {
            path: ":id",
            element: <SingleUser />,
          },
        ],
      },

      {
        path: "add",
        element: <AddUserForm />,
      },
    ],
  },
]);
