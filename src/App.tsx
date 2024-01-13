import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Mentalhealth from "./pages/Mentalhealth";
import Nutrition from "./pages/Nutrition";
import Fitness from "./pages/Fitness";
import Team from "./pages/Team";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mental-health" element={<Mentalhealth />} />
          <Route path="/nutrition" element={<Nutrition />} />
          <Route path="/fitness" element={<Fitness />} />
          <Route path="/team" element={<Team />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
