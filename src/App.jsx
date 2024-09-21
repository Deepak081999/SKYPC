import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import Categorie from "./components/Categories.jsx";
import Blog from "./components/Blogs.jsx";
import Service from "./components/Service.jsx";
import Recommended_Services from "./components/Recommended _Services.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <Service />
        <Categorie />
        <Recommended_Services />
        <Blog />
        <Footer />
      </div>
    </>
  );
};

export default App;
