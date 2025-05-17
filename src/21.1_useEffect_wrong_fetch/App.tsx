import { Outlet } from "react-router";
import Nav from "./Nav";

export default function App(): React.ReactElement {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
}
