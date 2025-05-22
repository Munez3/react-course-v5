/***
 * npx json-server --watch db.json --port 3000 --delay 150
 */

import api from "./api";

async function getUsers() {
  try {
    const response = await api("/users");
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

getUsers();

export default function App() {
  return <div>Hello World</div>;
}
