import { BrowserRouter as Router, Switch } from "react-router-dom";
import RouteProtected from "./components/RouteProtected";
import ThemeConfig from "./components/ThemeConfig";
import Login from "./pages/Login";
import Main from "./pages/Main";

function App() {
  return (
    <ThemeConfig>
      <Main />
    </ThemeConfig>
  );
}

export default App;
