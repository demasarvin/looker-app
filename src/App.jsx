import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
