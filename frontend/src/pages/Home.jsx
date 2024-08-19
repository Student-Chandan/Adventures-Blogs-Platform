import FeaturedBlogs from "../components/home/FeaturedBlogs";
import HeroSection from "../components/home/HeroSection";
import Navbar from "../components/home/Navbar";
import Contact from "./Contact";

const Home = () => {
  return (
    <section className="w-full">
      <Navbar />
      <HeroSection/>
      <FeaturedBlogs/>
      
    </section>
  );
};

export default Home;
