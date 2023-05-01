import { React } from "react";
import Bandeau from "../../assets/images/bandeau.jpg";
// import Gif from "../../assets/images/icons8-pas-de-connection.gif";
import { TiWiFi } from "react-icons/ti";

const BandeauNav = () => {

    return (
        <>
            <div className="text-white sm:grid sm:grid-cols-12 mb-3 hidden sm:block">
                <div className="flex items-center col-span-6 md:ml-[8em] sm:ml-[5em] lg:ml-[10em] 2xl:ml-[20em]">
                    <TiWiFi className="text-vert mr-1" />
                    {/* <img className="" src={Gif} alt="bandeau jdr" /> */}
                    <span className="">Connecté</span>
                </div>

                <a href="./app/assets/fichiers/cvGibilaro.pdf" className="col-span-6 md:ml-[8em] sm:ml-[5em] hover:text-rouge-light" download="../../assets/fichiers/cvGibilaro.pdf">Imprimer | Télécharger</a>
            </div>

            <div className="text-white hidden sm:block">
                <img className="mx-auto" src={Bandeau} alt="bandeau jdr" />
                {/* <img className="" src={Gif} alt="bandeau jdr" /> */}
            </div>
        </>
    );
};

export default BandeauNav;
