import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignDetails from "./pages/SignDetails";

export default function GetRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/horoscopo/:signName/" element={<SignDetails />} />
      </Routes>
    </Router>
  );
}
