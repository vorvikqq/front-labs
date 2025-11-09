import { useEffect, useState } from "react";
import "./Founders.css";

export default function RiddleModal({ riddle, onClose }) {
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    if (riddle) {
      setAnswer("");
      setFeedback("");
    }
  }, [riddle]);

  if (!riddle) return null;

  const normalize = (s) =>
    s
      .toLowerCase()
      .replace(/[^\p{L}\p{N}\s-]+/gu, "")
      .trim();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = normalize(answer);

    const ok = (riddle.answers || []).some((a) => {
      const norm = normalize(a);
      return norm === user || norm.includes(user) || user.includes(norm);
    });

    if (ok) {
      setFeedback("Правильно! Дякуємо за відповідь");
    } else {
      setFeedback("Неправильно. Спробуйте знову");
    }
  };

  const handleBackdrop = (e) => {
    if (e.target.classList.contains("modal")) {
      onClose?.();
    }
  };

  return (
    <div className="modal is-open" onClick={handleBackdrop}>
      <div className="modal__backdrop" onClick={onClose} />
      <div className="modal__dialog" role="dialog" aria-modal="true">
        <button className="modal__close" type="button" onClick={onClose}>
          ×
        </button>
        <h3 className="modal__title">
          {riddle.founder}: загадка
        </h3>
        <p className="modal__text">{riddle.text}</p>

        <form className="modal__form" onSubmit={handleSubmit}>
          <label className="modal__label" htmlFor="riddleAnswer">
            Ваша відповідь
          </label>
          <input
            id="riddleAnswer"
            className="modal__input"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            autoComplete="off"
            required
          />
          <button type="submit" className="button modal__submit">
            Перевірити
          </button>
        </form>

        {feedback && (
          <p
            className={
              "modal__feedback " +
              (feedback.startsWith("Правильно")
                ? "modal__feedback--ok"
                : "modal__feedback--bad")
            }
          >
            {feedback}
          </p>
        )}
      </div>
    </div>
  );
}
