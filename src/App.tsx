import "./App.css";
import { theme } from "./assets/theme";
import { ThemeProvider } from "@material-ui/core";
import GetRoutes from "./routes";

function App() {
  const divider : string = require("./assets/divider.png");
    return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <h1>Horóscopo</h1>
        <img src={divider} alt="das" className="dividerImage" />
          <GetRoutes/>
      </div>
    </ThemeProvider>
  );
}

export default App;
