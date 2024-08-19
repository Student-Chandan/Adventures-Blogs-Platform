import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";

function App() {
  return (
    <>
      <main className="flex items-center justify-center flex-col">
        <Routes>
          {/* <============ User Routes Start here ============> */}
            
            {/* <------------- Home Page --------------> */}
            <Route path="/" element={<Home/>}/>

            {/* <-------------- Blogs Page ---------------> */}
            <Route path="/blogs" element={<Blogs/>} />

          {/* <============ User Routes End here ============> */}
        </Routes>
      </main>
    </>
  );
}

export default App;
