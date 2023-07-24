import "./App.css";
import Checkbox from "./Checkbox/Checkbox";
import Dashboard from "./Dashboard/Dashboard";
import Home from "./Home/Home";
import Navbar from "./Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Checkbox/>
      <Dashboard/>
    </div>
  );
}

export default App;
