import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "../pages/Home";
import AboutPage from "../pages/About";
import Nav from "./components/Navigations";
import Song from "./components/Song";
import Learning from "../pages/Learning";
import SignUp from "../pages/SignUp";
function App() {


  return (
    <BrowserRouter>
    <Nav />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about"  element={<AboutPage />} />
       <Route path="/song/details/:id" element={<Song />} />
       <Route path="/learning" element={<Learning />} />
       <Route path="/signup" element={<SignUp />} />
    </Routes>
    </BrowserRouter>
  );
}
export default App;
