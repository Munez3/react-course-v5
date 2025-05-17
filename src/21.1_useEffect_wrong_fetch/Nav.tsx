import { Link } from "react-router-dom";

export default function Nav(): React.ReactElement {
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
    </>
  );
}
