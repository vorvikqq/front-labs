import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wrapper container">
        <div className="footer__info">
          <div className="footer__item">
            <p>Адреса</p>
            <p>
              вул. Здановська, 1
              <br />
              Київ, 01234, Україна
            </p>
          </div>
          <div className="footer__item">
            <p>Контакти</p>
            <p>
              +38 (066) 123-45-67
              <br />
              +38 (099) 987-65-43
            </p>
          </div>
          <div className="footer__item">
            <p>Email</p>
            <p>
              info@tmind.com
              <br />
              support@tmind.com
            </p>
          </div>
        </div>
        <p>© 2025 Task Mind. Всі права захищені.</p>
      </div>
    </footer>
  );
}
