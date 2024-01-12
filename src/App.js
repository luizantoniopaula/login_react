import {
  BrowserRouter as Router,
  Routes, Route
} from "react-router-dom";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Feed } from "./pages/feed";
import { Cad } from "./pages/cad";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/cad" element={<Cad />} />
      </Routes>
    </Router>

  );
}

export default App;
