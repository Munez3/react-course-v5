import {
  RouterProvider,
  createBrowserRouter,
  Link,
  Outlet,
} from "react-router-dom";
import "./index.scss";
import Home from "./Home";
import { UserContextProvider } from "./UserContext";
import AddUserForm from "./AddUserForm/AddUserForm";
import UserList from "./User/UserList";

/***
 * npx json-server --watch db.json --port 3001 --delay 150
 */

export default function Router() {
  return <RouterProvider router={router} />;
}

function Nav() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/add">Add new</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <UserContextProvider>
        <Nav />
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
