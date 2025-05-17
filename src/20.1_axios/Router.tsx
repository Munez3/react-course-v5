import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
} from "react-router";
import AddUserForm from "./AddUserForm/AddUserForm";
import Home from "./Home";
import UserList from "./User/UserList";
import { UserContextProvider } from "./UserContext";
import api from "./api";
import "./index.scss";

/***
 * npx json-server --watch db.json --port 3001 --delay 150
 */

async function getUsers() {
  try {
    const response = await api("/users");
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

getUsers();

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
