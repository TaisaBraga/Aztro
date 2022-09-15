import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import divider from "./images/divider.png";
import HomePage from "./page/HomePage";
import SignDetails from "./page/SignDetails";

function App() {
  return (
    <div className="App">
      <h1>Horóscopo</h1>
      <img src={divider} alt="das" className="dividerImage" />
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/horoscopo/:signName/" element={<SignDetails />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
