import React from "react";
import { Link } from "react-router-dom";
function Header (){
    return <header className="bg-stone-400 h-20 flex justify-center items-center  font-bold text-2xl gap-8">

        <Link to="/">Home</Link>
        <Link to="/details">Details</Link>
    </header>
}
export default Header;