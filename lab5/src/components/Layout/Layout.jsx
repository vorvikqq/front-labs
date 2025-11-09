import "./Layout.css";

export default function Layout({ left, main, right }) {
  return (
    <div className="layout">
      {left ? <div className="layout__left">{left}</div> : <div />}

      <main className="layout__main">
        {main}
      </main>

      {right ? <div className="layout__right">{right}</div> : <div />}
    </div>
  );
}
