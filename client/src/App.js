import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import VideoPage from "./pages/VideoPage";
import youtubeLogo from "./images/mainLogo.png";
import { useNavigate } from "react-router-dom";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className=" flex items-center w-full h-screen absolute bg-[#121213] ">
      {/* first menu section */}

      <div className="h-screen w-[15%]  bg-[#121213] text-white px-5 sticky  top-0  ">
        <Menu />
      </div>

      {/* main container */}
      <div className="w-[85%] h-screen overflow-y-scroll ">
        <div className="sticky top-0">
          <Navbar />
        </div>
        <div className="w-full h-screen  mt-1">

          <Routes>
               <Route path="/">
                <Route index element={<HomePage/>}/>
                <Route path="video">
                  <Route path=":id" element={<VideoPage/>}/>
                </Route>
               </Route>
          </Routes>

        </div>
      </div>
    </div>
  );
}

export default App;
