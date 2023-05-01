import { React } from "react";
import { Link, useNavigate } from "react-router-dom";


const SpaceTripCard = ({ imgLink, title, text }) => {

    return (
        <div className="col-span-12 md:col-span-6 lg:col-span-4 rounded overflow-hidden shadow-lg bg-gris-medium border-2 border-black mr-5 mt-5" >
            {imgLink &&
                <a href={imgLink} target="_blank" className="">
                    <img className="object-cover h-[150px] w-full" src={imgLink} alt="screen inscription" title="Cliquez pour agrandir" />
                </a>
            }

            <div class="px-6 py-4">
                <div class="font-bold text-xl text-gris mb-1">{title}</div>

                <hr className="border-b-2 border-jaune-dark w-[40%]" />

                <p class="text-gris-darkLight text-base font-bold mt-3">
                    {text}
                </p>
            </div>
        </div>
    );
};

export default SpaceTripCard;