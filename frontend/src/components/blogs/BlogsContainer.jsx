import Blog from "./Blog";

const BlogsContainer = () => {
  return (
    <>
      <section className="w-full sm:w-11/12 lg:w-[85%] px-2 p-5 h-auto mx-auto">
        <ul className="w-full h-10 flex items-center justify-start gap-x-2 text-[15px]">
          <li className="py-2 px-3 cursor-pointer transition-all hover:border-slate-400 hover:bg-slate-50 border-b-2 border-slate-400 bg-slate-50">
            Recents
          </li>
          <li className="py-2 px-3 cursor-pointer transition-all hover:border-slate-400 hover:bg-slate-50 border-b-2 border-transparent">
            Design
          </li>
          <li className="py-2 px-3 cursor-pointer transition-all hover:border-slate-400 hover:bg-slate-50 border-b-2 border-transparent">
            Sports
          </li>
          <li className="py-2 px-3 cursor-pointer transition-all hover:border-slate-400 hover:bg-slate-50 border-b-2 border-transparent">
            Technology
          </li>
          <li className="py-2 px-3 cursor-pointer transition-all hover:border-slate-400 hover:bg-slate-50 border-b-2 border-transparent">
            Gaming
          </li>
        </ul>
        <section className="px-1 py-5 gap-x-4 gap-y-7 flex items-center h-auto flex-wrap blogContainer">
          <Blog />
          <Blog />
          <Blog />
        </section>
      </section>
    </>
  );
};

export default BlogsContainer;
