import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Footer = () => {

    return (
        <div className="mx-auto 2xl:w-[70em] flex grid grid-cols-12 bg-[#121212] pb-5 pt-2">
            
            <div className="col-span-12 md:col-span-4 lg:col-span-3 text-white mt-5 lg:mt-0">
                <div className="w-7/12 mx-auto text-2xl font-bold">Loisirs</div>

                <hr className="border-b-1 border-yellow-500 w-7/12 mx-auto mt-1" />

                <div className="mx-auto mt-5 mx-auto font-bold">
                    <div className="w-7/12 mx-auto hover:text-jaune-dark">- Nouvelles techno</div>
                    <div className="w-7/12 mx-auto hover:text-jaune-dark">- Jeux de rôles</div>
                    <div className="w-7/12 mx-auto hover:text-jaune-dark">- Films d'horreur</div>
                    <div className="w-7/12 mx-auto hover:text-jaune-dark">- Hard rock</div>
                    <div className="w-7/12 mx-auto hover:text-jaune-dark">- Natation</div>
                </div>
            </div>

            <div className="col-span-12 md:col-span-4 lg:col-span-3 text-white mt-5 lg:mt-0">
                <div className="w-7/12 mx-auto text-2xl font-bold">Soft Skills</div>

                <hr className="border-b-1 border-yellow-500 w-7/12 mx-auto mt-1" />

                <div className="mx-auto mt-5 mx-auto font-bold">
                    <div className="w-7/12 mx-auto hover:text-jaune-dark">- Curiosité</div>
                    <div className="w-7/12 mx-auto hover:text-jaune-dark">- Esprit logique</div>
                    <div className="w-7/12 mx-auto hover:text-jaune-dark">- Autonomie</div>
                    <div className="w-7/12 mx-auto hover:text-jaune-dark">- Travail d'équipe</div>
                    <div className="w-7/12 mx-auto hover:text-jaune-dark">- Organisation</div>
                </div>
            </div>

            <div className="col-span-12 md:col-span-4 lg:col-span-3 text-white mt-5 lg:mt-0">
                <div className="w-7/12 mx-auto text-2xl font-bold">Divers</div>

                <hr className="border-b-1 border-yellow-500 w-7/12 mx-auto mt-1" />

                <div className="mx-auto mt-5 mx-auto font-bold">
                    <div className="w-7/12 mx-auto hover:text-jaune-dark">- Permis B</div>
                    <div className="w-7/12 mx-auto hover:text-jaune-dark">- Anglais B1</div>
                </div>
            </div>

            <div className="mx-[4em] sm:mx-[2em] lg:mx-0 col-span-12 md:col-span-12 lg:col-span-3 text-white mt-5 lg:mt-0">
                <div>
                    <div type="text" className="font-bold mt-3 bg-black border-l-2 border-yellow-500 placeholder-yellow-300 md:pl-3 sm:pl-1 w-full sm:text-[0.8em] md:text-[1em] h-[2.7em]">
                        <span className="">Email : </span>
                        <a href="mailto:n.gibilaro@hotmail.com" className="text-yellow-300 hover:text-rouge-light">n.gibilaro@hotmail.com</a>
                    </div>

                    <div type="text" className="font-bold mt-3 bg-black border-l-2 border-yellow-500 placeholder-yellow-300 md:pl-3 sm:pl-1 w-full sm:text-[0.8em] md:text-[1em] h-[2.7em]">
                        <span className="">Tel : </span>
                        <a href="tel:0672408302" className="text-yellow-300 hover:text-rouge-light">06.72.40.83.02</a>
                    </div>

                    <div type="text" className="font-bold mt-3 bg-black border-l-2 border-yellow-500 placeholder-yellow-300 md:pl-3 sm:pl-1 w-full sm:text-[0.8em] md:text-[1em] h-[2.7em]">
                        <span className="">Git : </span>
                        {/* <span className="text-yellow-300">github.com/Andhromede</span> */}
                        <Link to="https://github.com/Andhromede?tab=repositories" className="text-jaune hover:text-rouge-light" target="_blank">github.com/Andhromede</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
