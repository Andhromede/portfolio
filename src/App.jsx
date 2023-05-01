import React from "react";
import Routes from "./app/routes/Routes";
import { BrowserRouter } from "react-router-dom";
import "./app/assets/css/general.css";

import Navbar from "./app/components/layouts/Navbar";
import Footer from "./app/components/layouts/Footer";


const App = () => {
   return (
      <BrowserRouter>
         <div className="h-full min-h-screen cursor-default relative flex-col sm:px-[3em] md:px-[5em] bg-black">
            <Navbar/>

            {/* <div className="pt-[5em] px-5 text-white"> */}
            <div className="text-white">
               <Routes />
            </div>

            <Footer/>
         </div>
      </BrowserRouter>
   );
};

export default App;