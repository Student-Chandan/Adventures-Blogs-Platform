const HeroSection = () => {
  return (
    <section className="px-5 lg:px-20 sm:h-[500px] w-full bg-yellow-50 relative flex-center">
      <div className=" max-w-[800px] py-10 flex-center flex-col">
        <h1 className="head_text text-center">
          Adventures <span className="orange_gradient">Blogs Platform</span>
        </h1>
        <p className="desc text-center">
          It is a Blog platform where you can read blogs with different
          categories, I know you say that there are number of blog website are
          present in the market when why we come in your platform, then my
          answer is that there you can add your own blog.
        </p>
        <div className="gap-x-2 mt-7">
          <button className="btn mx-1">
            <span className="orange_gradient">Explore...</span>
          </button>
          <button className="btn mx-1">
            <span className="orange_gradient">Read Doumentation</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
