interface IProps {
  user: IUser;
}

export default function User({ user }: IProps): React.ReactElement {
  const { firstName, lastName, age } = user;

  if (!firstName && !lastName) {
    return <>Brak danych</>;
  }

  return (
    <>
      {firstName ? firstName : "- -"} {lastName && <strong>{lastName}</strong>},
      wiek {age} {age && age > 18 && <i>pełnoletni</i>}
    </>
  );
}
