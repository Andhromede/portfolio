import { React } from "react";
import "../assets/css/error.css";
import SpaceTripCard from "../components/layouts/SpaceTripCard";
import ButtonTechno from "../components/layouts/ButtonTechno";
import Avatar from "../assets/images/avatar.png";
import { MdOutlineExitToApp } from "react-icons/md";
import panneauXp from "../assets/images/panneau3.jpg";
import panneauFormation from "../assets/images/panneau.jpg";
import BlocDates from "../components/layouts/BlocDates";
import BlocText from "../components/layouts/BlocText";



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
                        {/* <div className="col-span-6 text-center">{new Date(new Date().getTime() - (86400 * 5000)).toLocaleDateString('fr-fr', { weekday: "long", year: "numeric", month: "long", day: "numeric" })}</div> */}
                        <div className="col-span-6 text-center">Mon parcours</div>

                        <div className="col-span-6 text-center flex mx-auto hover:text-jaune">
                            <span>{new Date(new Date().getTime() - (86400 * 5000)).toLocaleDateString('fr-fr', { weekday: "long", year: "numeric", month: "long", day: "numeric" })}</span>
                            {/* <span className="my-auto ml-2 "><MdOutlineExitToApp /></span> */}
                        </div>
                    </div>

                    <div className="text-white pt-0">

                        {/* SECTION FORMATIONS */}
                        {/* <div className="col-span-12 lg:col-span-5 "> */}
                        <div className="col-span-11 mx-auto">
                            <img className="mx-auto" src={panneauXp} alt="bandeau jdr" />

                            <div className="col-span-9 grid grid-cols-12 items-start mt-5 pl-1 pr-5">
                                <BlocDates date="2023" duree="(4mois)" />
                                <BlocText title="Incubateur d'Euratech." tabText={["1. Application de voyages en Nodes/JS/NoSQL. Travail en équipe avec la méthode Agile.", "2. Outils : Jira, Gitlab, Stripe, Google Auth & Recaptcha, redux, yup, Joi ..."]} />
                            </div>

                            <div className="col-span-9 grid grid-cols-12 items-start mt-5 pl-1 pr-5">
                                <BlocDates date="2022" duree="(8mois)" />
                                <BlocText title="Diplôme de CDA" lvl="Bac+4" tabText={["1. Conception & développement d'une application Vetolib en React/Node/SQL.", "2. Site e-commerce de vente de vêtement en React/.Net/SQL."]} />
                            </div>

                            <div className="col-span-9 grid grid-cols-12 items-start mt-5 pl-1 pr-5">
                                <BlocDates date="2022" duree="(4mois)" />
                                <BlocText title="MS PHP/Symfony & React/JS" text="Application mobile pour la maison des association de Roubaix et site e-commerce complet (Pizza Lorenzo)." />
                            </div>

                            <div className="col-span-9 grid grid-cols-12 items-start mt-5 pl-1 pr-5">
                                <BlocDates date="2021" duree="(8mois)" />
                                <BlocText title="Diplôme développeur Web" lvl="Bac+2" text="Conception et développement d'un reseau social pour les voyageurs en PHP natif/SQL..." />
                            </div>

                            <div className="col-span-9 grid grid-cols-12 items-start mt-5 pl-1 pr-5">
                                <BlocDates date="2021" duree="(4mois)" />
                                <BlocText title="Techniques de base du développement" text=" HTML / CSS / Javascript" />
                            </div>

                            <div className="col-span-9 grid grid-cols-12 items-start mt-5 pl-1 pr-5">
                                <BlocDates date="2001"/>
                                <BlocText title="Formation en informatique" lvl="Bac" text="Montage et dépannage informatique, Création de site web, installation reseaux ..."/>
                            </div>

                            <div className="bg-gris-darkLight h-[25px]" />

                            <div className="bg-gris-dark text-white grid grid-cols-12 py-1 mt-3">
                                <div className="col-span-6 text-center">Experience</div>

                                <div className="col-span-6 text-center flex mx-auto hover:text-jaune">
                                    <span>{new Date(new Date().getTime() - (86400 * 80000)).toLocaleDateString('fr-fr', { weekday: "long", year: "numeric", month: "long", day: "numeric" })}</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-span-1"></div>

                        {/* SECTION EXPERIENCES */}
                        <div className="col-span-11 mx-auto">
                            <img className="mx-auto" src={panneauFormation} alt="bandeau jdr" />

                            <div className="col-span-9 grid grid-cols-12 items-start mt-5 pl-1 pr-5">
                                {/* <BlocDates date="2022" duree="(4mois)"/> */}
                                <BlocDates date="2022"/>
                                <BlocText title="Conception & développement d'application pour Delpharm" text="Application de gestion de rapport d'accident, incident et de situations dangeureuse en React et .Net." />
                            </div>

                            <div className="col-span-9 grid grid-cols-12 items-start mt-5 pl-1 pr-5">
                                <BlocDates date="2021"/>
                                <BlocText title="Site e-commerce pour Labossa" text=" Conception et développement d'une application en PHP et Symfony 5. API d'authentification sécurisé avec section d'administration et tests fonctionnels." />
                            </div>

                            <div className="col-span-9 grid grid-cols-12 items-start mt-5 pl-1 pr-5">
                                <BlocDates date="2021"/>
                                <BlocText title="Conception et développement d'un reaseau social d'entreprise" text="Conception et développement d'une plateforme web (avec options d'accessibilités aux personnes en situation de handicap) pour un groupement d'entreprises en PHP/Symfony." />
                            </div>

                            <div className="col-span-9 grid grid-cols-12 items-start mt-5 pl-1 pr-5">
                                <BlocDates date="2018"/>
                                <BlocText title="Gérante remplacante dans un restaurant" tabText={["1. Gestion et chef de cuisine dans un restaurant BIO.", "2. Chef cuisinière pendant la grande braderie de lille (250 pers/serv).", "3. Cuisinière à la Rencontre Internationale des Cerfs-Volants (400 pers/serv)."]} />
                            </div>

                            <div className="col-span-9 grid grid-cols-12 items-start mt-5 pl-1 pr-5">
                                <BlocDates date="2008"/>
                                <BlocText title="Collaboratrice d'edition de projet collaboratif" text="Relecture des textes, illustration et infographie (1ère et 4ème de couvertures, côtes intérieurs et extérieur etc), création du dossier de fabrication, bon à tirer, obtention de numero ISBN, envoi d'un l'exemplaire en bibliothèque nationale ..." />
                            </div>

                            <div className="col-span-9 grid grid-cols-12 items-start mt-5 pl-1 pr-5">
                                <BlocDates date="1999"/>
                                <BlocText title="Tenue d'un Relay H" text="Gestion d'un magasin de tabac/presse : ouverture/fermeture, vente, commande et gestion des stocks, tenue de caisse ..."/>
                            </div>

                            <div className="bg-gris-darkLight h-[25px]" />

                            <div className="bg-gris-dark text-white grid grid-cols-12 py-1 mt-3">
                                <div className="col-span-8 text-center">{new Date(new Date().getTime() - (86400 * 70000)).toLocaleDateString('fr-fr', { weekday: "long", year: "numeric", month: "long", day: "numeric" })}</div>
                                <div className="col-span-4 text-center flex mx-auto hover:text-jaune">
                                    <span>Lire plus</span>
                                    <span className="my-auto ml-2 "><MdOutlineExitToApp /></span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="bg-gris text-white text-center hover:text-jaune my-5 w-[90%] md:w-[92%] lg:w-[95%] shadow-inner drop-shadow-lg">TOUTES LES NEWS</div>

            </div>


        </div >
    );
};

export default ProfilView;