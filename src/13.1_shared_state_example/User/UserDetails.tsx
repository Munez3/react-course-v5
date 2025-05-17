interface IProps {
  age: number | undefined;
}

export default function UserDetails({ age }: IProps): React.ReactElement {
  return (
    <div>
      <span>
        Wiek: {age} {age && age > 18 && <i>pełnoletni</i>}
      </span>
    </div>
  );
}
