export default function Button() {
  function handleClick() {
    alert("You clicked me!");
  }
  return (
    <>
      <button onClick={handleClick}>Kliknij!</button>
      <button
        onClick={function handleClick() {
          alert("You clicked me!");
        }}
      >
        Kliknij
      </button>
      <button
        onClick={() => {
          alert("You clicked me!");
        }}
      >
        Kliknij
      </button>
    </>
  );
}
