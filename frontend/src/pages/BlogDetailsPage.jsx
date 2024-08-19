import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import img1 from "../assets/1.jpg";

const BlogDetailsPage = () => {
  return (
    <section className="w-full relative ">
      <Navbar />
      <section className="w-full px-2 sm:w-[95%] md:w-[90%] lg:w-[85%] mx-auto h-auto relative flex py-4 my-5 justify-start gap-x-4">
        <div className="w-[70%] h-auto px-5">
          <div className="w-full h-auto bg-gradient-to-r mx-auto overflow-hidden">
            <img src={img1} alt="banner image" className="w-full h-auto" />
          </div>
          <div className="py-5">
            <h1 className="text-2xl font-semibold text-gray-800">
              There will tile of your blogs posts.
            </h1>
            <div className="flex items-center justify-between py-2">
              <div className="flex items-center">
                <div className="w-9 h-9 rounded-full bg-red-200 shadow"></div>
                <p className="text-sm ml-3 text-gray-700 py-2">Author Name </p>
              </div>
              <div>
                <span className="text-xs">11/12/2023</span>
              </div>
            </div>
            <p className=" text-gray-700 py-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam
              quaerat maiores similique laborum dicta nisi numquam. Ab libero ea
              pariatur officia ipsam veritatis quia quisquam saepe, vero
              reprehenderit. Voluptatem perspiciatis minima hic voluptatum magni
              debitis enim aspernatur veniam. Corrupti suscipit vel ducimus ad
              laboriosam, ipsa modi, illo maxime veniam voluptas accusantium
              quam sit cumque illum culpa labore rerum consequatur reiciendis
              eos eveniet inventore tempore quaerat a necessitatibus? Tempora,
              quaerat facere eveniet ea quis veritatis vitae voluptate impedit
              quam perferendis hic nihil perspiciatis fuga nulla culpa eos aut
              dolorum aliquid iusto ipsum neque! Doloremque aliquid suscipit
              deleniti quis quibusdam possimus neque expedita dignissimos nisi
              iure itaque odit, magnam deserunt aut impedit voluptas velit id
              officiis praesentium quo vitae reiciendis laborum eaque! Dolorem
              porro vitae enim ex! Voluptatem eveniet accusamus labore alias
              officia earum sit fugiat ullam voluptas praesentium numquam omnis
              vitae nobis, suscipit magnam perferendis debitis maiores.
              Repellendus blanditiis quibusdam, non, sunt doloremque aliquam
              eum, incidunt architecto nulla omnis ratione autem facere vero
              quis commodi maxime unde dolore et labore hic voluptatibus?
              Molestiae aliquam repudiandae a vero, facere architecto corrupti
              quos quibusdam debitis perferendis impedit aperiam ut veniam eos
              exercitationem iste voluptas rem laudantium quod. Qui libero
              reprehenderit tempora alias quae.
            </p>
            <h2 className="text-xl font-semibold py-2">What is Computer? </h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
              reprehenderit natus nulla quis modi in. Dolores unde voluptate
              ratione autem eaque maxime nemo architecto perferendis excepturi,
              mollitia officiis, odio tempore.
            </p>
          </div>
        </div>
        <div className="w-[28%] h-[500px] bg-white drop-shadow-sm grashmorphism sticky top-20 right-10 text-gray-700">
          <h2 className="px-4 py-3 font-semibold border-b text-lg">Other Categories</h2>
          <ul className="my-5 ">
            <li className="w-11/12 mb-2 rounded-sm mx-auto py-3 px-4 drop-shadow-sm transition-all bg-orange-50 hover:bg-red-50 cursor-pointer">Cyber Secuirty</li>
            <li className="w-11/12 mb-2 rounded-sm mx-auto py-3 px-4 drop-shadow-sm transition-all bg-orange-50 hover:bg-red-50 cursor-pointer">App Development</li>
            <li className="w-11/12 mb-2 rounded-sm mx-auto py-3 px-4 drop-shadow-sm transition-all bg-orange-50 hover:bg-red-50 cursor-pointer">Web Development</li>
          </ul>
        </div>
      </section>
      <Footer />
    </section>
  );
};

export default BlogDetailsPage;
