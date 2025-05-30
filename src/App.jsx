import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Privacy from "./screens/Privacy";
import Homepage from "./screens/Homepage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/portfolio" element={<Homepage />} />
        <Route path="/portfolio/privacy" element={<Privacy />} />
      </Routes>
    </Router>
  );
}

export default App;
