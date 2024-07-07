import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Books from "./Components/Books/Books";


const App = () => {
  return (
    <div className="container mx-auto scroll-smooth">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Books></Books>
    </div>
  );
};

export default App;