import { React } from "react";
import { Link, useNavigate } from "react-router-dom";


const NavButton = ({ title, id, classe, linkUrl }) => {

    return (
        <Link to={linkUrl}  className={`text-xl text-white font-bold italic rounded ${classe}`} id={id}>
            {title}
        </Link>
    );
};

export default NavButton;