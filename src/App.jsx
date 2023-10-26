import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header, Home } from "./components";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/searchTerm/:searchTerm" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
