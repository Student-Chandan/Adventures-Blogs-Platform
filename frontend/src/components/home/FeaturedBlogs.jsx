import Blog from "../blogs/Blog";
import FeaturedBlog from "./FeaturedBlog";

const FeaturedBlogs = () => {
  return (
    <>
    <h1 className="text-2xl pb-8 pt-2 border-b-4 border-orange-300 font-semibold text-center px-3 w-64 mt-5 mx-auto h_2 relative">
        Featured <span className="orange_gradient">Blogs</span>
      </h1>
    <section className="w-full mx-auto sm:w-11/12 lg:w-[85%] px-2 mt-10 p-5 h-auto blogContainer">
      <FeaturedBlog/>

    </section>
    </>
  );
};

export default FeaturedBlogs;


