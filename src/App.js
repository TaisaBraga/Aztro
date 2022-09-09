import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import divider from "./images/divider.png";
import CardsTemplate from "./page/cardsTemplate/CardsTemplate";
import SignDetails from "./page/signDetails/SignDetails";

function App() {
  return (
    <div className="App">
      <h1>Horóscopo</h1>
      <img src={divider} alt="das" className="dividerImage" />
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<CardsTemplate />} />
            <Route path="/horoscopo/:signName/" element={<SignDetails />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
