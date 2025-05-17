import {
  RouterProvider,
  createBrowserRouter,
  Link,
  Outlet,
  useParams,
  useNavigate,
} from "react-router-dom";
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
            <Link to="/param-test-name/React">Param - React</Link>
          </li>
          <li>
            <Link to="/param-test-name/Vue">Param - Vue</Link>
          </li>
          <li>
            <Link to="/param-test-id/123432">Param - 123432</Link>
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
        path: "/param-test-name/:name",
        element: <ParamTest />,
      },
      {
        path: "/param-test-id/:id",
        element: <ParamTest />,
      },
    ],
  },
]);

function ParamTest(): React.ReactElement {
  const navigate = useNavigate();
  const { name, id } = useParams();
  return (
    <div>
      <div>Nazwa: {name}</div>
      <div>Id: {id}</div>
      <button onClick={() => navigate("/")}>Home</button>
    </div>
  );
}
