import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Profil from "./components/Profil/Profil";
import Works from "./components/Works/Works";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/Works" element={<Works />} />
          <Route path="/" element={<Main />} />
          <Route path="/Profil" element={<Profil />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
