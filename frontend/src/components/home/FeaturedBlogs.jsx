const FeaturedBlogs = () => {
  return (
    <section className="bg-white h-[450px] w-full px-5 lg:px-20 py-4">
      <h1 className="text-3xl text-center py-2 font-semibold blue_gradient">
        Featured Blogs
      </h1>

      <div className="w-full h-auto p-2 gap-x-6 gap-y-6 flex items-center bg-green-200 mt-10 flex-wrap">
        <div className="w-80 drop-shadow h-48 rounded-lg bg-slate-50 mx-auto"></div>
        <div className="w-80 drop-shadow h-48 rounded-lg bg-slate-50 mx-auto"></div>
        <div className="w-80 drop-shadow h-48 rounded-lg bg-slate-50 mx-auto"></div>
      </div>
    </section>
  );
};

export default FeaturedBlogs;


