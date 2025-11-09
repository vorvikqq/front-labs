import "./About.css";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about__wrap container">
        <h2 className="about__title">Мета створення Task Mind</h2>

        <p className="about__desc">
          Наша основна мета – створити інноваційну систему для
          управління завданнями в команді. Ми прагнемо, щоб процес був
          зручним та ефективним для кожного учасника. Особливу увагу ми
          приділяємо автоматизації та оптимізації робочого процесу.
        </p>

        <ul className="about__list">
          <li>Створити інтуїтивно зрозумілий інтерфейс для користувачів</li>
          <li>Автоматично розподіляти завдання на основі пріоритетів</li>
          <li>Забезпечити прозорий контроль виконання та звітність</li>
        </ul>
      </div>
    </section>
  );
}
