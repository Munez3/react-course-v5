import { useRef, useState } from "react";
import style from "./AddUserForm.module.scss";
interface IProps {
  addUser: (user: IUser) => void;
}

export default function AddUserForm({ addUser }: IProps): React.ReactElement {
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
  }

  return (
    <div className={style.addUser}>
      <form onSubmit={handleSubmit} ref={formRef}>
        <input
          className={style.addUser__input}
          onChange={handlechange}
          name="firstName"
          placeholder="Imię"
        />
        <input
          className={style.addUser__input}
          onChange={handlechange}
          name="lastName"
          placeholder="Nazwisko"
        />
        <input
          onChange={handlechange}
          type="number"
          name="age"
          placeholder="Wiek"
          className={style.addUser__input}
        />
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
