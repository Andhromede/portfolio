import { React, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsXLg } from "react-icons/bs";
import { HiOutlineMenu } from "react-icons/hi";

import NavButton from "./NavButton";
import BandeauNav from "./BandeauNav";
import {URL_HOME, URL_SPACETRIP, URL_PROFIL} from "../../constants/urls/urlFrontEnd";


const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);


    /********** FONCTIONS AFFICHAGE DROPDOWN **********/
    const showElement = (evt) => {
        let dropDownPlanete = document.querySelector('[name="dropdown1"]');
        // let dropDownAccount = document.querySelector('[name="dropdownAccount"]');

        // if (evt.target.id == "monCompte") {
        //     dropDownAccount.classList.remove("hidden");
        // }
        if (evt.target.id == "projets") {
            dropDownPlanete.classList.remove("hidden");
        }
    };

    /********** FONCTIONS DISPARITION DROPDOWN **********/
    const hiddeElement = () => {
        document.querySelector('[name="dropdown1"]').classList.add("hidden");
    };


    return (
        <>
            <BandeauNav className=""/>

            <div className="sticky top-0 z-50">
                <nav className="flex bg-gris-dark sticky top-0 mx-auto 2xl:w-[70em] bg-opacity-80">
                    <div className="flex items-center justify-between md:justify-start ">

                        {/* MENU MOBILE */}
                        <div className="">
                            <button type="button" onClick={() => setIsNavOpen((prev) => !prev)} className="sm:hidden inline-flex items-center justify-center rounded-md p-2 text-white" aria-expanded="false">
                                <HiOutlineMenu className="text-2xl text-orange" />
                            </button>

                            <div onClick={() => setIsNavOpen(false)} className={isNavOpen ? "bg-black flex absolute z-10 w-full pl-5 text-white block top-0 left-0 flex-col justify-evenly" : "hidden"}>
                                <div className="text-sm flex flex-col justify-start items-start w-full ">
                                    <div className="absolute top-0 right-0 px-3 py-3" onClick={() => setIsNavOpen(false)} >
                                        <BsXLg />
                                    </div>
                                </div>

                                <div className="flex flex-col">
                                    <Link to="" className="py-2">Accueil</Link>
                                    <Link to="" className="py-2">Projets</Link>
                                    <Link to={URL_PROFIL} className="py-2">Profil</Link>
                                    <Link to="" className="py-2">Contact</Link>
                                    <a href="https://github.com/Andhromede" target="_blank" className="py-2">GitHub</a>
                                </div>
                            </div>
                        </div>

                        <div className="space-x-6 grid grid-cols-14 text-center hidden sm:flex py-2 ml-5">
                            <NavButton title="Accueil" classe="hover:bg-rouge-dark col-span-2 px-2 mb-6" linkUrl={URL_HOME}/>

                            <div className="col-span-2" onMouseOver={showElement} onMouseLeave={hiddeElement}>
                            {/* <div className="col-span-2" onMouseOver={showElement}  onMouseLeave={(event) => event.target.classList.add("hidden")}> */}
                                <NavButton linkUrl="" title="Projets" id="projets" data-dropdown-toggle="dropdown1" classe="hover:bg-rouge-dark px-2" />

                                <div x-show="open" name="dropdown1" id="dropdown1" className="absolute hidden">
                                    <div className="bg-black py-1 text-white text-left text-md font-bold" aria-labelledby="projets">
                                        <a href={URL_SPACETRIP} className="block py-2 px-7 hover:bg-rouge-dark rounded">Space Trip</a>
                                        <a href="" className="block py-2 px-7 hover:bg-rouge-dark rounded">Delpharm</a>
                                        <a href="" className="block py-2 px-7 hover:bg-rouge-dark rounded">VetoLib</a>
                                        {/* <a href="" className="block py-2 px-7 hover:bg-rouge-dark rounded">Pizza Lorenzo</a> */}
                                        <a href="" className="block py-2 px-7 hover:bg-rouge-dark rounded">Labossa</a>
                                        {/* <a href="" className="block py-2 px-7 hover:bg-rouge-dark rounded">Gen. Boomerang</a> */}
                                        <a href="" className="block py-2 px-7 hover:bg-rouge-dark rounded">Travelog</a>
                                    </div>
                                </div>
                            </div>

                            <div className="group col-span-2">
                                <Link to={URL_PROFIL} className="hover:bg-rouge-dark  px-2 text-white text-xl font-bold italic rounded">Profil</Link>
                                <div className="text-jaune italic font-bold text-sm">(RQTH)</div>
                            </div>

                            <NavButton linkUrl="mailto:n.gibilaro@hotmail.com" title="Contact" classe="hover:bg-rouge-dark col-span-2 px-2 mb-6" />
                            <a href="https://github.com/Andhromede" target="_blank" className="text-xl text-white font-bold italic rounded bg-bleu hover:bg-white hover:text-bleu col-span-2 px-2 mb-6">GitHub</a>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Navbar;
