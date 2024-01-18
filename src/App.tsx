import "./App.css";
import Home from "@/pages/Home/Home";
import Sidebar from "./components/Sidebar/Sidebar";
// import { useState } from "react";

function App() {
  // const [activeCollection, setActiveCollection] = useState("URBAN");

  return (
    <div style={{ display: "flex" }}>
      {/* <Sidebar setActiveCollection={setActiveCollection} />
      <Home activeCollection={activeCollection} /> */}
      <Sidebar />
      <Home />
    </div>
  );
}

export default App;
