import "./ButtonsBar.css";

export default function ButtonsBar({ onOpenCabinet, onRegister }) {
  return (
    <div className="buttons">
      <div className="buttons__wrapper container">
        <button
          className="buttons__cabin button"
          type="button"
          onClick={onOpenCabinet}
        >
          Перейти у власний кабінет
        </button>
        <button
          className="buttons__register button"
          type="button"
          onClick={onRegister}
        >
          Зареєструватись
        </button>
      </div>
    </div>
  );
}
