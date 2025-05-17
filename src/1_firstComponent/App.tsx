function Header() {
  return <h1>Pierwszy komponent</h1>;
}

function Profile() {
  return <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />;
}

export default function App() {
  return (
    <section>
      <Header />
      Hello
      <div>world!</div>
      <Profile />
      <Profile />
    </section>
  );
}
