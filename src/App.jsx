import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "../pages/Home";
import AboutPage from "../pages/About";
import Nav from "./components/Navigations";
import Song from "./components/Song";
import Learning from "../pages/Learning";
import SignUp from "../pages/SignUp";
import { ClerkProvider } from "@clerk/clerk-react"
import Shopping from "../pages/Shopping";
function App() {
  return (
    // <ClerkProvider publishableKey={import.meta.env.PUBLIC_CLERK_PUBLISHABLE_KEY}>
    <BrowserRouter>
    <Nav />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about"  element={<AboutPage />} />
      <Route path="/song/details/:id" element={<Song />} />
      <Route path="/learning" element={<Learning />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/shopping" element ={<Shopping />} />
    </Routes>
    </BrowserRouter>
    // </ClerkProvider>
  );
}
export default App;
