import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Community from "./pages/Community";
import BlogDetailsPage from "./pages/BlogDetailsPage";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <main className="flex items-center justify-center flex-col">
        <Routes>
          {/* <============ User Routes Start here ============> */}

          {/* <------------- Home Page --------------> */}

          <Route path="/" element={ <Layout> <Home /> </Layout> }/>

          {/* <-------------- Blogs Page ---------------> */}
          <Route path="/blogs" element={ <Layout> <Blogs /> </Layout> }/>

          {/* <-------------- Blogs Details Page ---------------> */}
          <Route path="/blogs/details" element={ <Layout> <BlogDetailsPage /> </Layout> }/>

          {/* <-------------- Contact Page ---------------> */}
          <Route path="/contact" element={<Layout> <Contact /> </Layout>}/>

          {/* <-------------- Contact Page ---------------> */}
          <Route path="/about" element={<Layout> <About /> </Layout>}/>

          {/* <-------------- Contact Page ---------------> */}
          <Route path="/community" element={<Layout><Community /></Layout>}/>

          {/* <============ User Routes End here ============> */}
        </Routes>
      </main>
    </>
  );
}

export default App;
