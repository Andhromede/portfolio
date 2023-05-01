import { React } from "react";


const BlocDates = ({ date, duree }) => {

    return (
        <>
            <div className="col-span-2 grid grid-cols-12 text-center">
                <div className="col-span-12 text-jaune font-bold text-[1.3em]">{date}</div>
                
                {duree &&
                    <div className="col-span-12 text-gris font-bold text-[0.8em]">{duree}</div>
                }
            </div>
        </>
    );
};

export default BlocDates;
