import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "../pages/Home";
import AboutPage from "../pages/About";
import Nav from "./components/Navigations";
function App() {


  return (
    <BrowserRouter>
    <Nav />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about"  element={<AboutPage />} />
      
    </Routes>
    </BrowserRouter>
  );
}
export default App;
