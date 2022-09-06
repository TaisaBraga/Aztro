import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import divid from "./images/divid.png"
import CardsTemplate from "./page/cardsTemplate"



function App() {
  return (
    <div className="App">
      <h1>Horóscopo</h1>
      <img src={divid} alt="das" className="dividerImage" />
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<CardsTemplate />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
