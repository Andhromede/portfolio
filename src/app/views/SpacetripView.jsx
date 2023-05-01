import { React } from "react";
import SpaceTripCard from "../components/layouts/SpaceTripCard";

// import AdminActivity from "../assets/images/spacetrip/adminActivity.jpg";
// import AdminBooking from "../assets/images/spacetrip/adminBooking.jpg";
import Inscription from "../assets/images/spacetrip/inscription.jpg";

// import Connexion from "../assets/images/spacetrip/connexion.jpg";
// import AdminDestination from "../assets/images/spacetrip/adminDestination2.jpg";
import AdminUser from "../assets/images/spacetrip/adminUser.jpg";
import DetailDestination from "../assets/images/spacetrip/detailDestination.jpg";
// import DetailDestination2 from "../assets/images/spacetrip/detailDestination2.jpg";
import Profil from "../assets/images/spacetrip/profil.jpg";
import Paiement from "../assets/images/spacetrip/paiement.jpg";
import Paiement2 from "../assets/images/spacetrip/paiement2.jpg";
import Panier from "../assets/images/spacetrip/panier.jpg";
import Panier2 from "../assets/images/spacetrip/panier2.jpg";

import AddActivity from "../assets/images/spacetrip/addActivity.jpg";
// import AddDestination from "../assets/images/spacetrip/addDestination.jpg";
// import AddHousing from "../assets/images/spacetrip/addHousing.jpg";

import Agile from "../assets/images/technos/agile.png";
// import Bootstrap from "../assets/images/technos/bootstrap.png";
// import CSharp from "../assets/images/technos/cSharp.png";
// import DotNet from "../assets/images/technos/dotNet.png";
import Git from "../assets/images/technos/git.png";
import JS from "../assets/images/technos/js.png";
import Node from "../assets/images/technos/node.png";
// import PHP from "../assets/images/technos/php.png";
import ReactIcon from "../assets/images/technos/react.png";
// import Sql from "../assets/images/technos/sql.png";
// import Symfony from "../assets/images/technos/symfony.png";
// import Symfony2 from "../assets/images/technos/symfony2.png";
import Tailwind from "../assets/images/technos/tailwind.png";
import Formik from "../assets/images/technos/formik.png";

import Stripe from "../assets/images/technos/stripe.png";
import ReCaptcha from "../assets/images/technos/recaptcha.png";
import Redux from "../assets/images/technos/redux.png";
import Yup from "../assets/images/technos/yup.png";
import Joi from "../assets/images/technos/joi.png";
import GoogleAuth from "../assets/images/technos/googleAuth.png";
import MongoDB from "../assets/images/technos/mongoDB.png";
import Auth0 from "../assets/images/technos/auth0.png";




const SpaceTripView = () => {


    return (
        <>

            <div className="mx-auto 2xl:w-[70em] font-F1 px-6 bg-gris-light py-5 grid grid-cols-12">

                <div className="text-rouge font-bold col-span-12 text-[3em] text-center">"SPACETRIP"</div>

                <div className="bg-gris-dark text-white col-span-12 py-1 mt-5 text-2xl text-center">
                    DESCRIPTION
                </div>

                <div className="col-span-12 text-gris font-bold text-lg mt-4">
                    <div>
                        SpaceTrip est une agence de voyage interplanétaire fictive conçu et développer par une équipe de 4 developpeurs passionés et
                        créatifs. Afin de continuer de monter en compétences en React/Node, nous avons décidés de travailler ensemble sur un site
                        e-commerce le plus complet possible et ceux grâce à la méthode Agile : Poker Planit, Jira, Github, Daily-meeting, review, sprint,
                        Scrum-master etc...
                    </div>

                    <div className="mt-5">
                        L'application propose des réservations de séjours et d'activitées sur divers planètes plus ou moins imaginaires.
                        Ces planètes ayant toutes été terraformées par l'être humain, leur environnement est considéré comme totalement habitable.
                        Les voyages quand à eux se font via des portails de téléportation quantique, permettant de voyager sur des distances très
                        longues et en un lapse de temps très court.
                    </div>

                    {/* <div className="mt-3">
                        Comment cela fonctionne t-il ? Et bien la téléportation quantique est un protocole qui consiste à transférer les molécules
                        d'un sujet d'un point A à un point B et ceux, sans avoir besoin de le transporter physiquement. Ce transfert s'appuie sur le phénomène
                        d’intrication quantique (un phénomène permettant à deux parties d'un système quantique liées, d'agir comme une seule et même entité et
                        ceux, même si elle sont très éloignées). La téléportation quantique utilise donc cette "liaison" afin de transférer l'état quantique d'un
                        1er système vers le 2nd.
                    </div> */}
                </div>

                <div className="bg-gris-dark text-white col-span-12 py-1 mt-6 text-2xl text-center">
                    TECHNOS (Front)
                </div>

                <div className="col-span-12 mx-auto flex grid grid-cols-12">
                    <div className="col-span-2 my-auto"><img src={Agile} alt="methode agile" className="my-auto" /></div>
                    <div className="col-span-3 my-auto"><img src={ReactIcon} alt="react" className="my-auto" /></div>
                    <div className="col-span-1 my-auto"><img src={JS} alt="Javascript" className="my-auto" /></div>
                    <div className="col-span-2 my-auto"><img src={Tailwind} alt="tailwind" className="my-auto" /></div>
                    <div className="col-span-2 my-auto mr-6"><img src={Git} alt="git" className="my-auto" /></div>
                    <div className="col-span-2 my-auto"><img src={ReCaptcha} alt="google recaptcha" className="my-auto" /></div>
                    <div className="col-span-2 my-auto mr-6"><img src={Redux} alt="redux" className="my-auto" /></div>
                    <div className="col-span-2 my-auto"><img src={Formik} alt="formik" className="my-auto" /></div>
                </div>

                <div className="bg-gris-dark text-white col-span-12 py-1 mt-6 text-2xl text-center">
                    FONCTIONNALITES
                </div>



                {/* <SpaceTripCard imgLink={Connexion} title="Page Connexion" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil." /> */}

                <SpaceTripCard
                    imgLink={DetailDestination}
                    title="Detail d'un logement"
                    text="Cette page propose une description complète, une note global, les avis des clients (seul ceux qui ont participés à
                    ce voyage peuvent poster un commentaire), un caroussel de photos, le prix par personne, le nombre de personnes maximum 
                    ainsi que le nombre de lit simple/double."
                />

                <SpaceTripCard
                    imgLink={Panier}
                    title="Ajouter au panier (Redux)"
                    text="Redux est une bibliothèque de gestion d'état, c'est à dire qu'elle permet de créer des states globaux (de créer des 
                    variables local qui rendent des données accessible partout sur l'application).
                    Il est possible ici de verifier et de selectionner ses dates de reservation pour un logement spécifié puis 
                    d'ajouter le voyage à son panier crâce à Redux Persist."
                />

                <SpaceTripCard
                    imgLink={Panier2}
                    title="Le Panier"
                    text="Il résume les voyages qui ont été séléctionnés. Il est encore possible ici de supprimer ou de modifier les voyages :
                    dates, nombre de personne, voyage premium etc. Le prix total dépend du nombre de jour séléctionnés, du nombre de 
                    personnes choisis, du prix du voyage et de l'option prémium."
                />

                <SpaceTripCard
                    imgLink={Paiement}
                    title="Le Paiement via par CB (Stripe)"
                    text="Stripe est une plateforme de paiement sécurisé qui permet également de simuler des fausses transaction financières
                    pour les développeurs. 
                    Si l'utilisateur à renseigné ses données dans son profil, ses infos apparaitront automatiquement ici mais si ce n'est pas
                    le cas, il devra les renseigner afin de pouvoir payer."
                />

                <SpaceTripCard
                    imgLink={Paiement2}
                    title="Le Paiement via Paypal"
                    text="L'api Paypal permet de simuler des paiement via la plateform américaine grace à la création d'un compte développeur
                    et d'un token d'authentification."
                />

                <SpaceTripCard
                    imgLink={Profil}
                    title="Le Profil (Formik)"
                    text="Formik est une bibliothèque qui permet de gerer et de sécuriser les formulaires. Il se charge ici de vérifier les 
                    données entrées par un utilisateur et vérifie (côté front) qu'ils soient conforme à ce qu'on attend lors de la soumission
                    du formulaire."
                />

                <SpaceTripCard
                    // imgLink={Profil}
                    title="Filtre de recherche"
                    text="Le filtre permet de trier par fourchette de prix, par destination, par logement ou encore par activitées et  
                    affiche ensuite les résultats selon le choix de l'utilsiateur : par ordre croissant, par ordre décroissant ou par note."
                />

                <div className="bg-gris-dark text-white col-span-12 py-1 mt-6 text-2xl text-center">
                    TECHNOS (Back)
                </div>

                <div className="col-span-12 mx-auto flex grid grid-cols-12">
                    <img src={Node} alt="node" className="mr-5 my-auto col-span-2" />
                    <img src={MongoDB} alt="mongo DB" className="mr-5 my-auto col-span-2" />
                    <img src={Stripe} alt="stripe" className="mr-5 my-auto col-span-2" />
                    <img src={Yup} alt="yup" className="mr-5 my-auto col-span-2" />
                    <img src={Joi} alt="joi" className="mr-5 my-auto col-span-2 w-2/3" />
                    <img src={GoogleAuth} alt="Google authentication" className="mr-5 my-auto col-span-2 w-2/3" />
                    <img src={Auth0} alt="Auth0" className="mr-5 my-auto col-span-3 w-2/3" />
                </div>

                <div className="bg-gris-dark text-white col-span-12 py-1 text-2xl text-center">
                    BACK-OFFICE
                </div>

                <SpaceTripCard
                    imgLink={Inscription}
                    title="Inscription / Connexion (Auth0)"
                    text="Auth0 est un service SaaS hyper connu et qui permet de gerer l'authentification de façon sécurisé.
                    L'inscription s'effectue grace à un token de validation qui est envoyé par mail et dont la validité n'est 
                    que de 24h. De plus, il est également possible de se connecter grâce à son compte google."
                />

                <SpaceTripCard
                    // imgLink={AdminActivity}
                    imgLink={AdminUser}
                    title="Le Update"
                    text="La base de donnée est en MongoDB, une base de donnée non relationnel (noSQL) et qui stock des données
                    en format Json. L'api est en Node/express et permet donc de faire : des ajouts, des update, des delete des find ..."
                />

                {/* <SpaceTripCard
                    imgLink={AdminDestination}
                    title="Update Destination"
                    text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, 
                    exercitationem praesentium nihil."
                /> */}

                {/* <SpaceTripCard
                    imgLink={AdminUser}
                    title="Update User"
                    text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, 
                    exercitationem praesentium nihil."
                /> */}

                <SpaceTripCard
                    imgLink={AddActivity}
                    title="L'ajout"
                    text="Le back-office permet une gestion complète de l'application. Il est ainsi possible de modifier chacune des données
                    présente dans la BDD ou d'en ajouter/supprimer."
                />

                {/* <SpaceTripCard imgLink={AddDestination} title="Back-office Add Destination" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil." /> */}

                {/* <SpaceTripCard
                    imgLink={AddHousing}
                    title="Add Housing"
                    text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, 
                    exercitationem praesentium nihil."
                /> */}

                <SpaceTripCard
                    // imgLink={AddHousing}
                    title="Joi"
                    text="Joi est une bibliothèque de validation de schémas d'objets, elle permet de vérifier que les données qui 
                    entrent sont conforme à ce que l'on attend."
                />

                <SpaceTripCard
                    // imgLink={AddHousing}
                    title="Node mailer"
                    text="Node ne gèrant pas le protocole SMTP de manière native, il est nécessaire d'utiliser une librairie qui aide au 
                    transport d'email. Il sert ici pour les fonctions d'inscription, de modification de mail et de mots de passe."
                />

                <SpaceTripCard
                    // imgLink={AddHousing}
                    title="Multer"
                    text="Multer est package de gestion de fichiers qui permet de gérer les fichiers entrants dans les requêtes HTTP.
                    Dans le cas de notre application, il sert principalement à la gestion des images."
                />

                <SpaceTripCard
                    // imgLink={AddHousing}
                    title="Elmet et Firebase Admin"
                    text="Helmet aide à protéger les applications de certaines vulnérabilités bien connues du Web (failles XSS), en 
                    configurant de manière appropriée les en-têtes HTTP. Il s'agit d'une collection de plusieurs middlewares 
                    qui définissent des en-têtes HTTP liés à la sécurité.
                    Firebase est une plateforme qui permet entre autre de créer des buckets afin de stocker des images en lignes et 
                    ceux afin de les rendre ensuite accessible en ligne."
                />


            </div>
        </>
    );
};

export default SpaceTripView;
