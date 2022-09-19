import { Route, Routes } from "react-router-dom";
import "./App.css";
import divider from "./assets/divider.png";
import HomePage from "./pages/HomePage";
import SignDetails from "./pages/SignDetails";
import { theme } from "./assets/theme";
import { ThemeProvider } from "@material-ui/core";

function App() {
  return (
    
    <ThemeProvider theme={theme}>
      <div className="App">
        <h1>Horóscopo</h1>
        <img src={divider} alt="das" className="dividerImage" />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/horoscopo/:signName/" element={<SignDetails />} />
          </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
