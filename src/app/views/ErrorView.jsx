import { React } from "react";
import "../assets/css/error.css";
import { URL_HOME, URL_SPACETRIP } from "../constants/urls/urlFrontEnd";
import { Link, useNavigate } from "react-router-dom";

import Error from "../assets/images/error.png"

const ErrorView = () => {

    return (
        <>
            {/* <div className="container mb-[5em]">

                <div className="error w-full h-auto text-center mb-0 h-full m-[50px]">
                    <p className="p">4</p>
                    <span className="dracula">
                        <div className="con">
                            <div className="hair"></div>
                            <div className="hair-r"></div>
                            <div className="head"></div>
                            <div className="eye"></div>
                            <div className="eye eye-r"></div>
                            <div className="mouth"></div>
                            <div className="blod"></div>
                            <div className="blod blod2"></div>
                        </div>
                    </span>
                    <p className="p">4</p>

                    <div className="page-ms">
                        <p className="page-msg"> Houps, la page que vous recherchez à disparu ... </p>
                        <Link to={URL_HOME} className="button go-back">Retour</Link>
                    </div>
                </div>
            </div> */}

            <div className="mx-auto 2xl:w-[70em] font-F1 5 grid grid-cols-12">

                <div class="test relative overflow-hidden h-screen col-span-12">
                    {/* <img src="https://external-preview.redd.it/4MddL-315mp40uH18BgGL2-5b6NIPHcDMBSWuN11ynM.jpg?width=960&crop=smart&auto=webp&s=b98d54a43b3dac555df398588a2c791e0f3076d9" class="absolute h-full w-full object-cover" /> */}
                    <img src={Error} class="absolute h-full w-full object-cover" />
                    <div class="inset-0 bg-black bg-opacity-25 absolute">
                        <h1 class="font-extrabold text-8xl text-center text-white leading-tight mt-4">
                            Game Over ...
                        </h1>
                    </div>
                    <div class="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
                        <div class="w-full flex flex-col items-center relative z-10">
                            {/* <h1 class="font-extrabold text-8xl text-center text-white leading-tight mt-4">
                                Game Over !
                            </h1> */}

                            <p class="font-extrabold text-7xl mb-44 mt-[2em] text-white animate-bounce sm:mt-10">
                                Link is dead !
                            </p>
                        </div>
                    </div>

                    <div className="page-ms mx-auto text-center mt-[1em] sm:mt-[10em] xl:mt-[5em]">
                        <Link to={URL_HOME} className="button go-back">Continue</Link>
                    </div>
                </div>

                
            </div>

        </>

    );
};

export default ErrorView;