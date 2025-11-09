import { useState } from "react";
import { founders } from "../../data/founders";
import RiddleModal from "./RiddleModal.jsx";
import "./Founders.css";

function getPhotoUrl(fileName) {
  return new URL(`../../assets/img/founders/${fileName}`, import.meta.url).href;
}

export default function Founders() {
  const [activeRiddle, setActiveRiddle] = useState(null);

  const handleOpenRiddle = (f) => {
    setActiveRiddle({
      founder: f.name,
      text: f.riddle,
      answers: f.answers || [],
    });
  };

  const handleCloseRiddle = () => setActiveRiddle(null);

  return (
    <>
      <section className="founders" tabIndex={0}>
        <div className="container">
          <table className="founders__table" border="2">
            <caption>Засновники Task Mind</caption>
            <thead>
              <tr>
                <th>Фото</th>
                <th>Ім&apos;я</th>
                <th>Посада</th>
                <th>Досвід</th>
                <th>Спеціалізація</th>
                <th>Контакти</th>
              </tr>
            </thead>
            <tbody>
              {founders.map((f) => {
                const rowsCount = Math.max(
                  f.positions?.length || 1,
                  f.experiences?.length || 1,
                  f.specializations?.length || 1
                );

                if (rowsCount === 1) {
                  return (
                    <tr key={f.id}>
                      <td className="founders__photo-cell">
                        <img
                          src={getPhotoUrl(f.photo)}
                          alt={`${f.name} — портрет`}
                          className="founder-photo"
                          onClick={() => handleOpenRiddle(f)}
                          onMouseEnter={() => handleOpenRiddle(f)}
                        />
                      </td>
                      <td>{f.name}</td>
                      <td>{f.positions?.[0] || ""}</td>
                      <td>{f.experiences?.[0] || ""}</td>
                      <td>{f.specializations?.[0] || ""}</td>
                      <td>{f.email}</td>
                    </tr>
                  );
                }

                const rows = [];
                for (let i = 0; i < rowsCount; i++) {
                  if (i === 0) {
                    rows.push(
                      <tr key={`${f.id}-row-${i}`}>
                        <td rowSpan={rowsCount} className="founders__photo-cell">
                          <img
                            src={getPhotoUrl(f.photo)}
                            alt={`${f.name} — портрет`}
                            className="founder-photo"
                            onClick={() => handleOpenRiddle(f)}
                            onMouseEnter={() => handleOpenRiddle(f)}
                          />
                        </td>
                        <td rowSpan={rowsCount}>{f.name}</td>
                        <td>{f.positions?.[i] || ""}</td>
                        <td>{f.experiences?.[i] || ""}</td>
                        <td>{f.specializations?.[i] || ""}</td>
                        <td rowSpan={rowsCount}>{f.email}</td>
                      </tr>
                    );
                  } else {
                    rows.push(
                      <tr key={`${f.id}-row-${i}`}>
                        <td>{f.positions?.[i] || ""}</td>
                        <td>{f.experiences?.[i] || ""}</td>
                        <td>{f.specializations?.[i] || ""}</td>
                      </tr>
                    );
                  }
                }
                return rows;
              })}

              <tr>
                <td colSpan="3">Всього засновників</td>
                <td colSpan="3">{founders.length} осіб</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="6">© 2025 Task Mind</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </section>

      <RiddleModal riddle={activeRiddle} onClose={handleCloseRiddle} />
    </>
  );
}
