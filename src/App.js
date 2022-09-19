import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import divider from "./images/divider.png";
import HomePage from "./pages/HomePage";
import SignDetails from "./pages/SignDetails";

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
