interface IProps {
  firstName: string;
  lastName: string;
  age: number;
}

export default function User({
  firstName,
  lastName,
  age,
}: IProps): React.ReactElement {
  return (
    <>
      {firstName} {lastName}, wiek {age}
    </>
  );
}
