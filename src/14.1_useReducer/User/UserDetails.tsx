interface IProps {
  age: number | undefined;
  deleteUser: () => void;
}

export default function UserDetails({
  age,
  deleteUser,
}: IProps): React.ReactElement {
  return (
    <div className="d-flex justify-space-between">
      <span>
        Wiek: {age} {age && age > 18 && <i>pełnoletni</i>}
      </span>
      <button onClick={deleteUser}>Usuń</button>
    </div>
  );
}
