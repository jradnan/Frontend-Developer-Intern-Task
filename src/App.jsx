import "./App.css";
import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";
import FoodApi from "./Components/foodapi/FoodApi";

function App() {
  return (
    <div className="main-section">
      <Navbar></Navbar>
      <Banner></Banner>
      <FoodApi></FoodApi>
      
    </div>
  );
}

export default App;
