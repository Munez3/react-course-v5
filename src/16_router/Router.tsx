import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
} from "react-router";
import App from "./App";
import Home from "./Home";
import "./index.scss";

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
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Nav />,
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
