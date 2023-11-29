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
    <div>
      <h4 className='title'>FullStack Developer</h4>
      <h1>Ariel Antequiera</h1>
      <p>Fusce tempor magna mi, non egestas velit ultricies nec. Aenean convallis, risus non condimentum gravida, odio mauris ullamcorper felis, ut venenatis purus ex eu mi. Quisque imperdiet lacinia urna, a placerat sapien pretium eu.</p>
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
        <button className="button buttonWhite">Contact</button>
      </a>
    </div>
  );
}
