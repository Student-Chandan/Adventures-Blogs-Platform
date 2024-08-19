import Footer from "../components/Footer";
import FeaturedBlogs from "../components/home/FeaturedBlogs";
import HeroSection from "../components/home/HeroSection";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <section className="w-full">
      <Navbar />
      <HeroSection
        title1="Adventures"
        title2="Blogs Platform"
        desc="It is a Blog platform where you can read blogs with different
          categories, I know you say that there are number of blog website are
          present in the market when why we come in your platform, then my
          answer is that there you can add your own blog."
      />
      <FeaturedBlogs />
      <Footer/>
    </section>
  );
};

export default Home;
