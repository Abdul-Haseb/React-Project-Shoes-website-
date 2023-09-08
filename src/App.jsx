// Header
import "./App.css";
import HeroSection from "./components/HeroSec";
import Navbar from "./components/Navbar";
const App = () => {
  return (
    <div className="main">
      <Navbar />
      <HeroSection />
    </div>
  );
};

export default App;
