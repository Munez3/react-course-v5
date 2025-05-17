interface IProps {
  firstName: string | undefined;
  lastName: string | undefined;
  age: number | undefined;
}

export default function User({
  firstName,
  lastName,
  age,
}: IProps): React.ReactElement {
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
