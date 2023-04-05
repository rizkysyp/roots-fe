import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Pages/home";
import AddKota from "./Pages/add";
import Detail from "./Pages/detail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddKota />} />
        <Route path="/kota/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
