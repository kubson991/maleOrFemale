import { useState } from "react";
import Balance from "./balance";

export default function App() {
  const [name, setName] = useState("");
  async function fetchR(e) {
    e.preventDefault();
    const info = new FormData(e.target);
    const name = Object.fromEntries(info).name;
    const res = await fetch(`https://api.genderize.io?name=${name}`);
    const resJSON = await res.json();
    setName(resJSON.gender);
  }
  return (
    <main>
      <section className="main">
        <Balance sex={name}></Balance>
        <section>
          <form onSubmit={fetchR}>
            <input type="text" name="name" />
            <button type="submit"></button>
          </form>
        </section>
      </section>
    </main>
  );
}
