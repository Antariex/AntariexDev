import type { MetaFunction } from "@remix-run/node";
import '../styles/main.css'

export const meta: MetaFunction = () => {
  return [
    { title: "Antariex" },
    { name: "Antariex", content: "Antariex <dev> portfollio and blog" },
  ];
};

export default function Index() {
  return (
    <div className="indexHero">
      <div>
        <img src="./images/me.jpg" alt="Ariel Antequiera" className="me" />
      </div>

      <div>
        <h4 className='title'>FullStack Developer</h4>
        <h1>Ariel Antequiera</h1>
        <p>Hello! This website reflects my enthusiasm to grow as a professional in the software industry. I have specialized in mobile and web development.
          <br />
          <br />
          Coding with 🤎 from Buenos Aires.
        </p>
        <br />
        <br />
        <a
          target="_blank"
          href="https://remix.run/tutorials/blog"
          rel="noreferrer">
          <button className="button buttonBlue">Download CV</button>
        </a>
        <a
          target="_blank"
          href="https://remix.run/tutorials/blog"
          rel="noreferrer">
          <button className="button buttonWhite">Contact me</button>
        </a>
      </div>
    </div>

  );
}
