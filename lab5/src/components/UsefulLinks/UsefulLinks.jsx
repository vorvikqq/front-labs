import { usefulLinks } from "../../data/links";
import "./UsefulLinks.css";

export default function UsefulLinks() {
  return (
    <aside className="useful-links">
      <h3 className="useful-links__title">Корисні посилання</h3>
      <ul className="useful-links__list">
        {usefulLinks.map((link) => (
          <li key={link.id}>
            <a
              href={link.href}
              className="useful-links__link link"
              {...(link.external ? { target: "_blank", rel: "noreferrer" } : {})}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
