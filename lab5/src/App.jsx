import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import HomePage from "./pages/Homepage.jsx";
import { useNightMode } from "./features/night-mode/useNightMode.js";

function App() {
  useNightMode();

  return (
    <>
      <Header />
      <HomePage />
      <Footer/>
    </>
  );
}

export default App;
