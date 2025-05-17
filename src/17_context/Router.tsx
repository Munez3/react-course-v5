import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
} from "react-router";
import App from "./App";
import Home from "./Home";
import "./index.scss";
import { UserContextProvider } from "./UserContext";

export default function Router() {
  return <RouterProvider router={router} />;
}

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ul>
    </nav>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <UserContextProvider>
        <Nav />
        <Outlet />
      </UserContextProvider>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "users",
        element: <App />,
      },
    ],
  },
]);
