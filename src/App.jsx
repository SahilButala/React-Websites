import Footer from "../components/Footer/Footer";
import Navbar from "../components/Header/Navbar";
import Home from "../components/HomePage/Home";
import Banner from "../components/banner/Banner";
import Values from "../components/values/Values";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Values/>
      <Banner/>
      <Footer/>
      
    </>
  );
}

export default App;
