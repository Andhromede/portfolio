import { React } from "react";
import BlocSubText from "./BlocSubText";

const BlocText = ({ title, tabText, text, lvl }) => {

    return (
        <>
            <div className="col-span-10 text-center text-start grid grid-cols-12">
                <div className="col-span-12 text-gris text-md font-bold">
                    <span>- {title}</span>

                    {lvl &&
                        <span className="text-jaune"> ({lvl})</span>
                    }
                </div>

                {tabText &&
                    <>
                        {tabText.map(item => {
                            return (
                                <BlocSubText text={item} />
                            )
                        })}
                    </>
                }

                {text &&
                    <BlocSubText text={text} />
                }

            </div>
        </>
    );
};

export default BlocText;
