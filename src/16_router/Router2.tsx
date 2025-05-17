import { BrowserRouter, Link, Outlet, Route, Routes } from "react-router";
import App from "./App";
import Home from "./Home";
import "./index.scss";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
          <Route path="users" element={<App />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
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
