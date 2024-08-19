import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Community from "./pages/Community";
import BlogDetailsPage from "./pages/BlogDetailsPage";

function App() {
  return (
    <>
      <main className="flex items-center justify-center flex-col">
        <Routes>
          {/* <============ User Routes Start here ============> */}

          {/* <------------- Home Page --------------> */}
          <Route path="/" element={<Home />} />

          {/* <-------------- Blogs Page ---------------> */}
          <Route path="/blogs" element={<Blogs />} />

          {/* <-------------- Blogs Details Page ---------------> */}
          <Route path="/blogs/details" element={<BlogDetailsPage />} />

          {/* <-------------- Contact Page ---------------> */}
          <Route path="/contact" element={<Contact />} />

          {/* <-------------- Contact Page ---------------> */}
          <Route path="/about" element={<About />} />

          {/* <-------------- Contact Page ---------------> */}
          <Route path="/community" element={<Community />} />

          {/* <============ User Routes End here ============> */}
        </Routes>
      </main>
    </>
  );
}

export default App;
