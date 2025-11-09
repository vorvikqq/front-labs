import Layout from "../components/Layout/Layout.jsx";
import Reviews from "../components/Reviews/Reviews.jsx";
import UsefulLinks from "../components/UsefulLinks/UsefulLinks.jsx";
import About from "../components/About/About.jsx";
import Founders from "../components/Founders/Founders.jsx";
import ButtonsBar from "../components/ButtonsBar/ButtonsBar.jsx";
import { useTypewriter } from "../features/typewriter/useTypewriter";

export default function HomePage() {
  const mottoText =
    "Мисли ясно. Будуй сміливо. Рости разом з командою.";
  const printedMotto = useTypewriter(mottoText, 55);

  return (
    <Layout
      left={<Reviews />}
      main={
        <>
          <h1 className="title">
            Task Mind — інноваційний стартап для управління командами
          </h1>

          <p className={`motto typewriter ${printedMotto === mottoText ? "done" : ""}`}>
            {printedMotto}
          </p>

          <About />
          <Founders />
          <ButtonsBar
            onOpenCabinet={() => {
              console.log("open cabinet");
            }}
            onRegister={() => {
              console.log("register");
            }}
          />
        </>
      }
      right={<UsefulLinks />}
    />
  );
}
