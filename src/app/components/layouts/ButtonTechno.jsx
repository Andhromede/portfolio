import { React } from "react";


const ButtonTechno = ( {title, nbr, classe} ) => {

    return (
        <div className="col-span-12 mx-5 mt-2 ">
            <div className="bg-black py-1">
                <span className={`${classe} px-1.5 rounded-[50%] ml-2 font-bold`}>{nbr}</span>
                <span className="font-bold ml-2 md:ml-5 text-jaune md:text-[1em] lg:text-[1.3em] hover:text-red-600">{title}</span>
            </div>
        </div>
    );
};

export default ButtonTechno;
