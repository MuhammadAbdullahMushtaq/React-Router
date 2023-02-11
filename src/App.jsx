import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<h1>PAGE NOT FOUND 404</h1>} />
      </Routes>
    </div>
  );
}

export default App;