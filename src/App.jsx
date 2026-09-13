import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Privacy from "./screens/Privacy";
import MonoHome from "./layouts/Homepage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MonoHome />} />
        <Route path="/portfolio" element={<MonoHome />} />
        <Route path="/portfolio/" element={<MonoHome />} />
        <Route path="/portfolio/mono" element={<MonoHome />} />
        <Route path="/portfolio/privacy" element={<Privacy />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </Router>
  );
}

export default App;
