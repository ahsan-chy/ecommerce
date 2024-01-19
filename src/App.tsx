import "./App.css";
import Routers from "./Routers/Routers";

function App() {
  // const [activeCollection, setActiveCollection] = useState("URBAN");

  return (
    <>
      {/* <Sidebar setActiveCollection={setActiveCollection} />
      <Home activeCollection={activeCollection} /> */}
      {/* <Sidebar />
      <Home /> */}
      <Routers />
    </>
  );
}

export default App;
