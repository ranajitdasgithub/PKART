import "./App.css";
import Footer from "./Pages/Footer";
import MainRoutes from "./Pages/MainRoutes";
import Navbar from "./Pages/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MainRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
