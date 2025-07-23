import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { useState } from "react";

function App() {
  // const [initialValue, setInitialValue] = useState([1, 2, 3, 4, 5, 6, 7]);
  const [names, setNames] = useState(["Adebayo", "Adeniyi", "Adewale"]);
  const [name, setName] = useState("");

  return (
    <>
      <div style={{margin: "120px"}}>
        <Header />
        <h1>Welcome</h1>
       {names.map((value, index) => (
        <h1 key={index}>
          {value}
        </h1>
       )) }

       <input type="text" value={name} label="Name" onChange={(e) => setName(e.target.value)}  /> <br/>


       <br/>
        <button
          onClick={() => setNames([ ...names, name])}
        >
          Add Name
        </button>
        <Footer />
      </div>
    </>
  );
}
export default App;
