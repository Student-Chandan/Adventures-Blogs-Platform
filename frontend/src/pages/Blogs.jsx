import Navbar from "../components/Navbar";
import HeroSection from "../components/home/HeroSection";
import BlogsContainer from "../components/blogs/BlogsContainer";
import Footer from "../components/Footer";

const Blogs = () => {
  return (
    <>
      <section className="w-full">
        <Navbar />
        <HeroSection
          title1="Explore"
          title2="Our Blogs with Categories"
          desc="It is a Blog platform where you can read blogs with different
          categories, I know you say that there are number of blog website are
          present in the market when why we come in your platform, then my
          answer is that there you can add your own blog."
        />
        <BlogsContainer/>
        <Footer/>

      </section>
    </>
  );
};

export default Blogs;
