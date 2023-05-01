import { React } from "react";
import "../assets/css/error.css";
import SpaceTripCard from "../components/layouts/SpaceTripCard";
import ButtonTechno from "../components/layouts/ButtonTechno";
import Avatar from "../assets/images/avatar.png";

const ProfilView = () => {
    return (
        // <div className="bgProfil mx-auto 2xl:w-[70em] font-F1 px-6 py-5 grid grid-cols-12">

        // </div>

        <div className="mx-auto 2xl:w-[70em] flex grid grid-cols-12 font-F1 bgProfil">

            {/* SECTION DE GAUCHE */}
            <div className="col-span-12 sm:col-span-4 lg:col-span-3 grid grid-cols-12 bg-black bg-opacity-60">

                <img className="col-span-12 mt-6 w-2/3 rounded-[50%] mx-auto bg-yellow-500" src={Avatar} alt="bandeau jdr" />

                <div className="col-span-12 mx-auto mt-6 grid grid-cols-12">
                    <div className="text-[1.8em] text-center mt-6 font-bold col-span-12">Nathalie Gibilaro</div>

                    <div className="col-span-12 mx-auto">
                        <input type="text" className="bg-black placeholder-jaune sm:text-[0.8em] md:text-[1.3em] h-[1.8em] text-center mt-6" disabled placeholder="Développeuse d'applications" />
                    </div>

                    {/* <div className="col-span-12 mx-auto">
                        <label htmlFor="tel" className="block text-[0.8em] text-sm text-white">Tel</label>
                        <input type="text" className="bg-black rounded-lg placeholder-jaune md:pl-3 sm:pl-1 sm:text-[0.8em] md:text-[1.3em] h-[1.8em]" disabled id="tel" placeholder="06.72.40.83.02" />
                    </div>

                    <div className="col-span-12 mx-auto">
                        <label htmlFor="email" className="block text-[0.8em] text-sm text-white">email</label>
                        <input type="text" className="bg-black rounded-lg placeholder-jaune md:pl-3 sm:pl-1sm:text-[0.8em] md:text-[1.3em] h-[1.8em]" disabled id="email" placeholder="n.gibilaro@hotmail.com" />
                    </div>

                    <div className="col-span-12 mx-auto">
                        <label htmlFor="email" className="block text-[0.8em] text-sm text-white">email</label>
                        <input type="text" className="bg-black rounded-lg placeholder-jaune md:pl-3 sm:pl-1 sm:text-[0.8em] md:text-[1.3em] h-[1.8em]" disabled id="email" placeholder="n.gibilaro@hotmail.com" />
                    </div> */}
                </div>
            </div>

            {/* SECTION DE DROITE */}
            <div className=" col-span-12 sm:col-span-8 lg:col-span-9 text-xl text-white pl-6 pt-6 font-bold ">
                <div className="text-[1.8em]">A propos de moi ...</div>

                <hr className="border-b-2 border-jaune-dark w-1/5 mt-3" />

                <div className="mr-[2em] mt-5 bg-gris-medium">
                    {/* <img className="" src={Banniere} alt="bandeau jdr" /> */}

                    <div className="text-gris text-2xl ml-5 font-bold mt-3">à propos</div>

                    <hr className="border-b-2 border-jaune-dark w-[3em] mt-3 ml-5" />

                    <div className="mx-5 text-justify mt-5 text-[1em] text-gris-darkLight">
                        <span className="italic">
                            "Passionnée de cuisine, j'ai toujours adorée le travail d'équipe et la satisfaction client. Aujourd'hui j'ai choisi de
                            me reconvertir dans un domaine qui me passionne tout autant, l'informatique ! Pratiquant l'infographie depuis plusieurs
                            années, il était naturel pour moi de m'orienter vers la conception et le développement d'applications. Amatricec de
                            sciences naturelles et de biologie, j'aime autant la logique que la créativité. Je suis simplement curieuse et j'ai
                            toucher à tous les domaines !"
                        </span>

                        <br />

                        <span className="font-bold text-gris text-[1.1em]">- Nathalie Gibilaro</span>
                    </div>

                    <div className="bg-gris-dark text-white grid grid-cols-12 py-1 mt-3">
                        <div className="col-span-6 text-center">{new Date(new Date().getTime() - (86400 * 5000)).toLocaleDateString('fr-fr', { weekday: "long", year: "numeric", month: "long", day: "numeric" })}</div>

                        <div className="col-span-6 text-center flex mx-auto hover:text-jaune">
                            <span>Lire plus</span>
                            {/* <span className="my-auto ml-2 "><MdOutlineExitToApp /></span> */}
                        </div>
                    </div>

                    <div className="text-white grid grid-cols-11 pt-0">

                        {/* SECTION FORMATIONS */}
                        <div className="col-span-12 lg:col-span-5 ">
                            {/* <img className="" src={panneauXp} alt="bandeau jdr" /> */}

                            <div className="col-span-9 grid grid-cols-12 items-start mt-5 pl-1 pr-5">
                                <div className="col-span-2 grid grid-cols-12 text-center">
                                    <div className="col-span-12 text-jaune font-bold text-[1.3em]">2023</div>
                                    <div className="col-span-12 text-gris font-bold text-[0.8em]">(4mois)</div>
                                </div>

                                <div className="col-span-10 text-center text-start grid grid-cols-12">
                                    <div className="col-span-12 text-gris text-md font-bold">- Incubateur d'Euratech.</div>
                                    <div className="col-span-12 text-gris-darkLight pl-2 text-justify text-[0.9em] italic">
                                        1. Application de voyages en Nodes/JS/NoSQL. Travail en équipe avec la méthode Agile.
                                        2. Outils : Jira, Gitlab, Stripe, Google Auth & Recaptcha, redux, yup, Joi ...
                                    </div>
                                </div>
                            </div>



                            <div className="bg-gris-dark text-white grid grid-cols-12 py-1 mt-3">
                                <div className="col-span-8 text-center">{new Date(new Date().getTime() - (86400 * 80000)).toLocaleDateString('fr-fr', { weekday: "long", year: "numeric", month: "long", day: "numeric" })}</div>
                                <div className="col-span-4 text-center flex mx-auto hover:text-jaune">
                                    <span>Lire plus</span>
                                    {/* <span className="my-auto ml-2 "><MdOutlineExitToApp /></span> */}
                                </div>
                            </div>
                        </div>

                        <div className="col-span-1"></div>

                        {/* SECTION EXPERIENCES */}
                        <div className="col-span-12 lg:col-span-5">
                            {/* <img className="" src={panneauFormation} alt="bandeau jdr" /> */}

                            <div className="col-span-9 grid grid-cols-12 items-start mt-5 pl-1 pr-5">
                                <div className="col-span-2 grid grid-cols-12 text-center">
                                    <div className="col-span-12 text-jaune font-bold text-[1.3em]">2022</div>
                                    <div className="col-span-12 text-gris font-bold text-[0.8em]">(4mois)</div>
                                </div>

                                <div className="col-span-10 text-center text-start grid grid-cols-12">
                                    <div className="col-span-12 text-gris text-md font-bold">- Conception & développement d'application pour Delpharm</div>
                                    <div className="col-span-12 text-gris-darkLight pl-2 text-justify text-[0.9em] italic">
                                        Application de gestion de rapport d'accident, incident et de situations dangeureuse en React et .Net.
                                    </div>
                                </div>
                            </div>



                            <div className="bg-gris-dark text-white grid grid-cols-12 py-1 mt-3">
                                <div className="col-span-8 text-center">{new Date(new Date().getTime() - (86400 * 70000)).toLocaleDateString('fr-fr', { weekday: "long", year: "numeric", month: "long", day: "numeric" })}</div>
                                <div className="col-span-4 text-center flex mx-auto hover:text-jaune">
                                    <span>Lire plus</span>
                                    {/* <span className="my-auto ml-2 "><MdOutlineExitToApp /></span> */}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="bg-gris text-white text-center hover:text-jaune my-5 w-[90%] md:w-[92%] lg:w-[95%] shadow-inner drop-shadow-lg">TOUTES LES NEWS</div>

            </div>


        </div>
    );
};

export default ProfilView;