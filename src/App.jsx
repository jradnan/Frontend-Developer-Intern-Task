import "./App.css";
import Banner from "./Components/Banner/Banner";
import RecomendedFood from "./Components/Foodapi/RecomendedFood";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import FoodApi from "./Components/foodapi/FoodApi";

function App() {
  return (
    <>
      <div className="main-section">
        <Navbar></Navbar>
        <Banner></Banner>
        <FoodApi></FoodApi>
        <RecomendedFood></RecomendedFood>
       
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
