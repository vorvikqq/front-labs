import "./Header.css";
import logo from "../../assets/img/start-up_logo.png";

export default function Header() {
  return (
    <header className="header header-main">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__logo">
            <a href="#!" className="header__logo-link">
              <img src={logo} alt="Start-up logo" className="header__logo-img" />
            </a>
            <p className="header__logo-title">Task Mind</p>
          </div>

          <nav className="header__nav">
            <ul className="header__list">
              <li className="header__list-item">
                <a href="projects.html" className="header__link link">
                  Проєкти
                </a>
              </li>
              <li className="header__list-item">
                <a href="#reviews" className="header__link link">
                  Відгуки про нас
                </a>
              </li>
              <li className="header__list-item">
                <a href="feedback.html" className="header__link link">
                  Зворотній зв&apos;язок
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
