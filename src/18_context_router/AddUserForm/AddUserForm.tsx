import { useRef, useState } from "react";
import { useNavigate } from "react-router";
import type { IUser } from "../App.interface";
import useUserContext from "../UserContext";
import style from "./AddUserForm.module.scss";

export default function AddUserForm(): React.ReactElement {
  const { addUser } = useUserContext();
  const navigate = useNavigate();

  const [user, setUser] = useState<IUser>({
    firstName: "",
    lastName: "",
    age: undefined,
  });

  const formRef = useRef<HTMLFormElement>(null);

  function handlechange(e: React.ChangeEvent<HTMLInputElement>) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    addUser(user);
    setUser({ firstName: "", lastName: "", age: undefined }); // clear state
    formRef.current?.reset(); // reset form
    formRef.current?.firstName.focus(); // focus on firstName input
    navigate("/users");
  }

  return (
    <div className={style.addUser}>
      <form onSubmit={handleSubmit} ref={formRef}>
        <div>
          <label>
            Imię
            <input
              className={style.addUser__input}
              onChange={handlechange}
              name="firstName"
              placeholder="Imię"
            />
          </label>
        </div>
        <div>
          <label>
            Nazwisko
            <input
              className={style.addUser__input}
              onChange={handlechange}
              name="lastName"
              placeholder="Nazwisko"
            />
          </label>
        </div>
        <div>
          <label>
            Wiek
            <input
              onChange={handlechange}
              type="number"
              name="age"
              placeholder="Wiek"
              className={style.addUser__input}
            />
          </label>
        </div>
        <button
          type="submit"
          className="btn"
          disabled={!(user.firstName && user.lastName && user.age)}
        >
          Dodaj
        </button>
      </form>
    </div>
  );
}
