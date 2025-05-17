import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
} from "react-router";
import AddUserForm from "./AddUserForm/AddUserForm";
import Home from "./Home";
import "./index.scss";
import UserList from "./User/UserList";
import { UserContextProvider } from "./UserContext";

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
